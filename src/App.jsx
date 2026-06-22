import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Promises from './components/Promises'
import Menu from './components/Menu'
import Story from './components/Story'
import Location from './components/Location'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Promises />
        <Menu />
        <Story />
        <Location />
      </main>
      <Footer />
    </>
  )
}
