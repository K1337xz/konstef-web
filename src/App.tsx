import './App.css'
import Navbar from '@/components/Navbar/Navbar'
import HeroSection from './components/HeroSection/HeroSection'
import About from '@/components/About/About'
import Cards from '@/components/Cards/Cards'
import Realizations from './components/Realizations/Realizations'

function App() {
    return (
        <>
            <div className="app bg-csk-50">
                <Navbar />
                <HeroSection />
                <About />
                <Cards />
                <Realizations />
            </div>
        </>
    )
}

export default App
