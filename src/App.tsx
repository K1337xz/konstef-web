import './App.css'
import Navbar from '@/components/Navbar/Navbar'
import HeroSection from './components/HeroSection/HeroSection'
import About from '@/components/About/About'
import Cards from '@/components/Cards/Cards'
import Realizations from './components/Realizations/Realizations'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
    return (
        <>
            <div className="app bg-csk-50">
                <Navbar />
                <main className=" w-full">
                    <HeroSection />
                    <About />
                    <Cards />
                    <Realizations />
                    <Contact />
                </main>
                <Footer />
            </div>
        </>
    )
}

export default App
