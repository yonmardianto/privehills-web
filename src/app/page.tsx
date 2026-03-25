import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Promo from "@/components/Promo";
import Units from "@/components/Units";
import UpcomingDesign from "@/components/UpcomingDesign";
import Testimonials from "@/components/Testimonials";
import Facilities from "@/components/Facilities";
import Location from "@/components/Location";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import UnitsKomersial from "@/components/UnitKomersial";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <UpcomingDesign />
      <Stats />
      <Promo />
      <Units />
      <UnitsKomersial />
      <Testimonials />
      <Facilities />
      <Location />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
