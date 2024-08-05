import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from '@/components/Navbar/Navbar'
import HeroSection from './components/HeroSection/HeroSection'
import About from '@/components/About/About'
import Cards from '@/components/Cards/Cards'
import Realizations from './components/Realizations/Realizations'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import { Private } from './components/Private/Private'

function App() {
    return (
        <>
            <div className="app bg-csk-50">
                <Navbar />
                <main className=" w-full">
                    <Routes>
                        <Route
                            path="/polityka-prywatności"
                            element={<Private />}
                        />
                        <Route
                            path="/"
                            element={
                                <>
                                    <HeroSection />
                                    <About />
                                    <Cards />
                                    <Realizations />
                                    <Contact />
                                </>
                            }
                        />
                        {/* Add other routes here */}
                    </Routes>
                </main>
                <Footer />
            </div>
        </>
    )
}

export default App
