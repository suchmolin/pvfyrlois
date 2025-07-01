
import './App.css'
import Caracteristicas from './components/Caracteristicas'
import Galeria from './components/Galeriaindex'
import Header from './components/Header'
import Motivalo from './components/Motivalo'
import Navbar from './components/Navbar'
import QueObtiene from './components/QueObtiene'
import TodoListo from './components/TodoListo'

function App() {

  return (
    <main className='w-full min-h-screen font-eastman'>
      <Navbar />
      <Header />
      <Caracteristicas />
      <Motivalo />
      <QueObtiene />
      <Galeria />
      <TodoListo />
    </main>
  )
}

export default App
