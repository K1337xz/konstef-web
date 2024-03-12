import Logo from '@/assets/Konst-stef.png'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { IoCloseSharp } from 'react-icons/io5'
import { AnimatePresence, motion } from 'framer-motion'
import { useState } from 'react'

type Props = {}

export default function Navbar({}: Props) {
    const [open, setOpen] = useState(false)

    const toggleMobile = () => {
        setOpen((prevValue) => (prevValue = !prevValue))
    }

    const variants = {
        open: { opacity: 1, x: 0 },
        closed: { opacity: 0, x: '-100%' },
    }

    return (
        <nav>
            <div className="z-10  flex w-full items-center justify-between bg-white p-6">
                <div className="mx-auto flex  h-14 w-5/6 items-center justify-between">
                    <img src={Logo} className="w-32" />
                    {/* DESKTOP NAV */}
                    <div className="font-Nunito  hidden w-2/3 items-center justify-end gap-8 text-base font-normal text-csk-950 lg:flex">
                        <ul className="flex items-center justify-center gap-8">
                            <li>
                                <Link to="4">O Firmie</Link>
                            </li>
                            <li>
                                <Link to="3">O Nas</Link>
                            </li>
                            <li>
                                <Link to="2">Realizacje</Link>
                            </li>
                            <li>
                                <Link to="1">Opinie</Link>
                            </li>
                            <li>
                                <Link to="5">Kontakt</Link>
                            </li>
                        </ul>
                    </div>
                    {/* DESKTOP MOBILE/TABLET NAV */}
                    <div className="cursor-pointer lg:hidden">
                        <FaBars onClick={toggleMobile} />
                    </div>
                    <AnimatePresence>
                        <motion.div
                            animate={open ? 'open' : 'closed'}
                            variants={variants}
                            className="fixed left-0 top-0 z-30 flex h-full w-full items-center justify-center bg-csk-800/95 lg:hidden"
                        >
                            <IoCloseSharp
                                className="absolute right-5 top-5 cursor-pointer text-xl text-white"
                                onClick={toggleMobile}
                            />

                            <ul className="flex flex-col items-center justify-center gap-8 font-medium text-csk-50	">
                                <li>
                                    <Link to="4">O Firmie</Link>
                                </li>
                                <li>
                                    <Link to="3">O Nas</Link>
                                </li>
                                <li>
                                    <Link to="2">Realizacje</Link>
                                </li>
                                <li>
                                    <Link to="1">Opinie</Link>
                                </li>
                                <li>
                                    <Link to="5">Kontakt</Link>
                                </li>
                            </ul>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </nav>
    )
}
