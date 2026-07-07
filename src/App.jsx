import Navbar from './components/Navbar'
import MainPage from './components/MainPage'
import Events from './components/Eventos'
import ErrorPage from './components/ErrorPage'
import Footer from './components/Footer'
import { Routes, Route } from 'react-router-dom'


export default function App() {
  return (
    <>
      <Navbar />
      <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/events" element={<Events />} />
          <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </>
  )
}
