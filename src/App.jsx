import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Statsbar from './components/Statsbar'
import Aboutsnapshot from './components/Aboutsnapshot'
import Productcategories from './components/Productcategories'
import TherapeuticAreas from './components/TherapeuticAreas'
import Whyus from './components/Whyus'
import Certifications from './components/Certifications'
import EnquiryBanner from './components/EnquiryBanner'
import About from './pages/About'
import Products from './pages/Products'
import Quality from './pages/Quality'
import Contact from './pages/Contact'

const Home = () => (
  <>
    <Hero />
    <Statsbar />
    <Aboutsnapshot />
    <Productcategories />
    <TherapeuticAreas />
    <Whyus />
    <Certifications />
    <EnquiryBanner />
  </>
)

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/quality" element={<Quality />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}
