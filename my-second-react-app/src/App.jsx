import About from './Components/About'
import ContactInfo from './Components/ContactInfo'
import Header from './Components/Header'
import Projects from './Components/Projects'
import Testimonials from './Components/Testimonials'

const App = () => {
  return (
    <div>
      <Header />
      <About />
      <Projects />
      {/* ✅ Testimonials was built but never added to App */}
      <Testimonials />
      {/* Adding Contact Info part : */}
      <ContactInfo />
    </div>
  )
}

export default App
