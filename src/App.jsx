import About from "./components/About/About"
import Booking from "./components/Booking/Booking"
import FAQ from "./components/FAQ/FAQ"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Practitioner from "./components/Practitioner/Practitioner"
import Services from "./components/Services/Services"
import Session from "./components/Session/Session"

function App() {

  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <Practitioner/>
      <Session/>
      <Booking/>
      <FAQ/>
      <Footer/>
    </div>
  )
}

export default App
