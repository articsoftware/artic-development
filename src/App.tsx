import { useState } from "react";
import Navbar   from "./components/Navbar";
import Hero     from "./components/Hero";
import Services from "./components/Services";
import About    from "./components/About";
import Process  from "./components/Process";
import Contact  from "./components/Contact";
import Footer   from "./components/Footer";
import FAQ from "./components/FAQ";
import type { ServiceRequest } from "./types";

export default function App() {
  const [serviceRequest, setServiceRequest] = useState<ServiceRequest | null>(null);
  const selectService = (value: string) => {
    setServiceRequest(previous => ({ value, requestId: (previous?.requestId ?? 0) + 1 }));
  };
  return (
    <div className="site-shell">
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Services onSelectService={selectService} />
        <About />
        <Process />
        <FAQ />
        <Contact serviceRequest={serviceRequest} />
      </main>
      <Footer />
    </div>
  );
}
