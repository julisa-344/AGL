import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Cotizacion from './pages/Cotizacion'
import ProductosPage from './pages/ProductosPage'
import ButtonDemo from './pages/ButtonDemo'

function App() {
  return (
    <Router>
      <div className="font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/cotizacion" element={<Cotizacion />} />
          <Route path="/productos" element={<ProductosPage />} />
          <Route path="/buttons" element={<ButtonDemo />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
