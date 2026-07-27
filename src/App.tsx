import ParticleCanvas from './components/ParticleCanvas'
import FloralFrame from './components/FloralFrame'
import Hero from './components/Hero'
import WaveDivider from './components/WaveDivider'
import Countdown from './components/Countdown'
import EventDetails from './components/EventDetails'
import PhoneRSVP from './components/PhoneRSVP'
import Gallery from './components/Gallery'
import Footer from './components/Footer'

function App() {
  return (
    <div className="app">
      <FloralFrame />
      <ParticleCanvas />
      <Hero />
      <main>
        <WaveDivider />
        <Countdown />
        <EventDetails />
        <Gallery />
        <PhoneRSVP />
      </main>
      <Footer />
    </div>
  )
}

export default App
