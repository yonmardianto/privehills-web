import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Promo from '@/components/Promo'
import Units from '@/components/Units'
import Testimonials from '@/components/Testimonials'
import Facilities from '@/components/Facilities'
import Location from '@/components/Location'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import FloatingWhatsApp from '@/components/FloatingWhatsApp'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <Promo />
      <Units />
      <Testimonials />
      <Facilities />
      <Location />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </main>
  )
}
