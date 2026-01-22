import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalCss } from './styles/GlobalStyle'
import Home from './pages/Home'
import Perfil from './pages/Profile'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <GlobalCss />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/perfil/:id" element={<Perfil />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App