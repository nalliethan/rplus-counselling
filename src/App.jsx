import About from "./components/About/About"
import Booking from "./components/Booking/Booking"
import Footer from "./components/Footer/Footer"
import Hero from "./components/Hero/Hero"
import Practitioner from "./components/Practitioner/Practitioner"
import Services from "./components/Services/Services"
import Session from "./components/Session/Session"

function App() {

  return (
    <div>
      <Hero/>
      <About/>
      <Services/>
      <Practitioner/>
      <Session/>
      <Booking/>
      <Footer/>
    </div>
  )
}

export default App
