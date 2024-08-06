import Logo from '@/assets/Konst-stef btt.png'
import { FiPhone } from 'react-icons/fi'
import { FaRegEnvelope } from 'react-icons/fa6'
import { Link } from 'react-scroll'
import { useNavigate } from 'react-router-dom'

export default function Footer() {
    const navigate = useNavigate()
    return (
        <footer className="h-80 w-full bg-csk-500">
            <div className="flex h-full w-full flex-col lg:pl-40 lg:pr-60 lg:pt-7 lg:text-left lg:text-xl">
                <div className="flex h-full  w-full items-start  justify-between gap-10 p-6 text-center ">
                    <div className="flex h-full w-full items-start  ">
                        <Link
                            to="#1"
                            spy={true}
                            smooth={true}
                            offset={50}
                            duration={500}
                        >
                            <img
                                src={Logo}
                                className="w-20 lg:w-40"
                                onClick={() => navigate('/')}
                            />
                        </Link>
                    </div>

                    <div className="flex w-full gap-5 lg:gap-10">
                        <ul className=" text-center text-csk-50 ">
                            <li className="mb-4 text-center lg:text-left ">
                                Firma
                            </li>
                            <ul className="flex flex-col gap-5 text-center text-sm lg:text-left">
                                <li>
                                    <Link
                                        to="#3"
                                        spy={true}
                                        smooth={true}
                                        offset={50}
                                        duration={500}
                                    >
                                        O nas{' '}
                                    </Link>
                                </li>

                                <li>
                                    <Link
                                        to="#2"
                                        spy={true}
                                        smooth={true}
                                        offset={50}
                                        duration={500}
                                    >
                                        Realizacje{' '}
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="#5"
                                        spy={true}
                                        smooth={true}
                                        offset={50}
                                        duration={500}
                                    >
                                        Kontakt{' '}
                                    </Link>
                                </li>
                            </ul>
                        </ul>
                        <div>
                            <Link
                                to="tel:516910480"
                                className="flex items-center gap-3 text-sm text-csk-50 lg:text-lg"
                            >
                                <FiPhone />
                                +48 516 910 480
                            </Link>
                            <Link
                                to="mailto:konstef@gmail.com"
                                className="flex items-center gap-3 text-sm text-csk-50 lg:text-lg"
                            >
                                <FaRegEnvelope />
                                konstef@gmail.com
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex w-full items-center justify-center text-csk-50">
                    <Link
                        to="/polityka-prywatności"
                        onClick={() => navigate('/polityka-prywatności')}
                        className="text-sm"
                    >
                        Polityka Prywatności
                    </Link>
                </div>
            </div>
        </footer>
    )
}
