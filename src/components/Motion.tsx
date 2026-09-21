import { useState, type ReactNode } from "react";
import { AnimatePresence, LazyMotion, MotionConfig, domAnimation, m, useReducedMotion, type HTMLMotionProps } from "framer-motion";

// Shared timings: deliberate entrances, faster exits, immediate reduced motion.
export function useUiMotion() {
  const reduced = useReducedMotion();
  const transition = (duration: number) => ({
    duration: reduced ? 0 : duration,
    ease: [0.22, 1, 0.36, 1] as const,
  });
  return { reduced, transition };
}

export function SiteMotion({ children }: { children: ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <LazyMotion features={domAnimation} strict>{children}</LazyMotion>
    </MotionConfig>
  );
}

export function MotionLink(props: HTMLMotionProps<"a">) {
  const { reduced, transition } = useUiMotion();
  return <m.a whileTap={reduced ? undefined : { scale: 0.98 }} transition={transition(0.12)} {...props} />;
}

// A single reveal per content group, also revealed immediately by keyboard focus.
export function Reveal({ children, className }: { children: ReactNode; className?: string }) {
  const { reduced, transition } = useUiMotion();
  const [visible, setVisible] = useState(false);
  const [focused, setFocused] = useState(false);
  return <m.div className={className} initial={reduced ? false : { opacity: 0 }}
    animate={{ opacity: reduced || visible || focused ? 1 : 0 }}
    onViewportEnter={() => setVisible(true)} viewport={{ once: true, amount: 0.12 }}
    onFocusCapture={() => setFocused(true)} transition={transition(focused ? 0 : 0.35)}>
    {children}
  </m.div>;
}

export function DisclosureIcon({ open }: { open: boolean }) {
  const { transition } = useUiMotion();
  return <span className="disclosure-icon" aria-hidden="true"><span />
    <m.span animate={{ rotate: open ? 0 : 90, opacity: open ? 0 : 1 }} transition={transition(0.18)} />
  </span>;
}

export function Disclosure({ open, id, labelledBy, className, children }: {
  open: boolean;
  id: string;
  labelledBy?: string;
  className?: string;
  children: ReactNode;
}) {
  const { transition } = useUiMotion();
  return (
    <div id={id} className={className} role={labelledBy ? "region" : undefined}
      aria-labelledby={labelledBy} aria-hidden={!open}
      ref={node => { if (node) node.inert = !open; }}>
      <AnimatePresence initial={false}>
        {open && (
          <m.div key="content" initial={{ height: 0, opacity: 0, overflow: "hidden" }}
            animate={{ height: "auto", opacity: 1, transitionEnd: { overflow: "visible" } }}
            exit={{ height: 0, opacity: 0, overflow: "hidden", transition: transition(0.18) }}
            transition={transition(0.28)}>
            {children}
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}
