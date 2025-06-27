
import './App.css'
import Caracteristicas from './components/Caracteristicas'
import Header from './components/Header'
import Navbar from './components/Navbar'

function App() {

  return (
    <main className='w-full min-h-screen font-eastman'>
      <Navbar />
      <Header />
      <Caracteristicas />
    </main>
  )
}

export default App
