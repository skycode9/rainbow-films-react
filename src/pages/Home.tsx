import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import Films from '../components/Portfolio' // Renamed from Portfolio to Films
import About from '../components/About'
// import Services from '../components/Services' // Commented out as requested
import Contact from '../components/Contact'
import Clients from '../components/Clients'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <main className="bg-black text-white overflow-hidden">
      <Navigation />
      <section id="hero">
        <Hero />
      </section>
      <section id="films">
        <Films />
      </section>
      <section id="about">
        <About />
      </section>
      <Clients />
      <section id="contact">
        <Contact />
      </section>
      <Footer />
    </main>
  )
}
