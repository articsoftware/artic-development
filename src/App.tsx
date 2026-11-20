import { useState } from "react";
import Navbar      from "./components/Navbar";
import Hero        from "./components/Hero";
import Manifesto   from "./components/Manifesto";
import Services    from "./components/Services";
import About       from "./components/About";
import Process     from "./components/Process";
import FAQ         from "./components/FAQ";
import Contact     from "./components/Contact";
import Footer      from "./components/Footer";
import FloatingCTA from "./components/FloatingCTA";
import { SiteMotion } from "./components/Motion";
import type { ServiceRequest } from "./types";

export default function App() {
  const [serviceRequest, setServiceRequest] = useState<ServiceRequest | null>(null);
  const selectService = (value: string) => {
    setServiceRequest(previous => ({ value, requestId: (previous?.requestId ?? 0) + 1 }));
  };

  return (
    <SiteMotion>
      <div className="site-shell">
        <div className="scroll-progress" aria-hidden="true" />
        <Navbar />
        <main id="main-content" tabIndex={-1}>
          <Hero />
          <Manifesto />
          <Services onSelectService={selectService} />
          <About />
          <Process />
          <FAQ />
          <Contact serviceRequest={serviceRequest} />
        </main>
        <Footer />
      </div>
      <FloatingCTA />
    </SiteMotion>
  );
}
