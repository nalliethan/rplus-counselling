import About from "./components/About/About"
import Booking from "./components/Booking/Booking"
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
    </div>
  )
}

export default App
