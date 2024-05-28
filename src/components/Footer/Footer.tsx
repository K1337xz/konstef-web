import Logo from '@/assets/Konst-stef btt.png'
import { FiPhone } from 'react-icons/fi'
import { FaRegEnvelope } from 'react-icons/fa6'

import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="h-80 w-full bg-csk-500">
            <div className="flex h-full w-full flex-col lg:pl-40 lg:pr-60 lg:pt-7 lg:text-left lg:text-xl">
                <div className="flex h-full  w-full items-center  justify-between gap-10 p-6 text-center ">
                    <img src={Logo} className="w-40" />
                    <div className="flex gap-10">
                        <ul className=" text-left text-csk-50 ">
                            <li className="mb-4">Firma</li>
                            <ul className="flex flex-col gap-5 text-left text-sm">
                                <li>
                                    <Link to="#">O nas </Link>
                                </li>
                                <li>
                                    <Link to="#">Opinie </Link>
                                </li>
                                <li>
                                    <Link to="#">Realizacje </Link>
                                </li>
                                <li>
                                    <Link to="#">Kontakt </Link>
                                </li>
                            </ul>
                        </ul>
                        <div>
                            <Link
                                to="tel:516910480"
                                className="flex items-center gap-3 text-lg text-csk-50"
                            >
                                <FiPhone />
                                +48 516 910 480
                            </Link>
                            <Link
                                to="mailto:konstef@gmail.com"
                                className="flex items-center gap-3 text-lg text-csk-50"
                            >
                                <FaRegEnvelope />
                                konstef@gmail.com
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
