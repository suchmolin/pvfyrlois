
import './App.css'
import AprovechaPreventa from './components/AprovechaPreventa'
import AsiSeVive from './components/AsiSeVive'
import Caracteristicas from './components/Caracteristicas'
import Contactanos from './components/Contactanos'
import Footer from './components/Footer'
import Galeria from './components/Galeriaindex'
import Header from './components/Header'
import Motivalo from './components/Motivalo'
import Navbar from './components/Navbar'
import PreguntasFrecuentes from './components/PreguntasFrecuentes'
import QueObtiene from './components/QueObtiene'
import Reviews from './components/Reviews'
import Sumergelo from './components/Sumergelo'
import Summer2025 from './components/Summer2025'
import TodoListo from './components/TodoListo'
import UnPlanVacaional from './components/UnPlanVacaional'
import WhatsappButton from './components/WhatsappButton'

function App() {

  return (
    <main className='w-full min-h-screen font-eastman overflow-hidden' lang="es" translate="no">
      <Navbar />
      <Header />
      <Caracteristicas />
      <Motivalo />
      <QueObtiene />
      <Galeria />
      <TodoListo />
      <Summer2025 />
      <AsiSeVive />
      <Sumergelo />
      <UnPlanVacaional />
      <Reviews />
      <AprovechaPreventa />
      <PreguntasFrecuentes />
      <Contactanos />
      <Footer />

      <WhatsappButton />
    </main >
  )
}

export default App
