import Navbar   from "./components/Navbar";
import Hero     from "./components/Hero";
import Services from "./components/Services";
import About    from "./components/About";
import Process  from "./components/Process";
import Contact  from "./components/Contact";
import Footer   from "./components/Footer";

export default function App() {
  return (
    <div className="bg-[#080E1A] text-[#E8F4FF] min-h-screen overflow-x-hidden"
      style={{ fontFamily: "'Outfit', sans-serif" }}>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
      <Hero />
      <Services />
      <About />
      <Process />
      <Contact />
      </main>
      <Footer />
    </div>
  );
}
