import './App.css'
import Navbar from '@/components/Navbar/Navbar'
import HeroSection from './components/HeroSection/HeroSection'
import About from '@/components/About/About'
import Cards from '@/components/Cards/Cards'

function App() {
    return (
        <>
            <div className="app bg-csk-50">
                <Navbar />
                <HeroSection />
                <About />
                <Cards />
            </div>
        </>
    )
}

export default App
