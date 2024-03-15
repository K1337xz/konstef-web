import { slider } from '@/images'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { GoChevronLeft, GoChevronRight } from 'react-icons/go'

type Props = {}

const variants = {
    hiddenRight: {
        x: '100%',
        opacity: 0,
    },
    hiddenLeft: {
        x: '-100%',
        opacity: 0,
    },
    visible: {
        x: '0',
        opacity: 1,
        display: 'flex',
        transition: {
            duration: 1,
        },
    },
    exit: {
        display: 'none',
        transition: {
            duration: 0.5,
        },
    },
}

export default function Carusel({}: Props) {
    const [imageIndex, setImageIndex] = useState(0)
    const [direction, setDirection] = useState('left')

    const toggleLeft = () => {
        setDirection('left')
        setImageIndex((prevIndex) =>
            prevIndex - 1 < 0 ? slider.length - 1 : prevIndex - 1
        )
    }

    const toggleRight = () => {
        setDirection('right')
        setImageIndex((prevIndex) =>
            prevIndex + 1 === slider.length ? 0 : prevIndex + 1
        )
    }

    return (
        <>
            <AnimatePresence>
                <motion.div
                    key={imageIndex}
                    variants={variants}
                    animate="visible"
                    exit="exit"
                    initial={
                        direction === 'right' ? 'hiddenRight' : 'hiddenLeft'
                    }
                    className="-mt-24 flex h-full items-start"
                >
                    <div
                        key={imageIndex}
                        style={{
                            backgroundImage: `linear-gradient(rgb(32 45 70), rgb(32 45 70 / 61%)), url(${slider[imageIndex].backgroundImage} )`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                        }}
                        className=" relative aspect-video h-full w-screen shrink-0 rounded-xl object-cover"
                    >
                        <div className=" flex h-full w-full flex-col items-center justify-center  p-6 lg:items-start">
                            <div className="flex w-full flex-col gap-8 lg:mx-40">
                                <h1 className="w-full whitespace-pre-line text-center font-bebasNeue text-6xl text-csk-50  md:text-8xl lg:w-1/2 lg:text-left lg:text-9xl">
                                    {slider[imageIndex].header}
                                </h1>
                                <p className="lg:full w-full whitespace-pre-line text-center font-nunito text-lg font-light italic text-csk-50 md:text-3xl lg:text-left">
                                    {slider[imageIndex].paragraph}
                                </p>
                            </div>
                            <div className="mt-7 flex w-full flex-col items-center gap-8 lg:mx-40 lg:items-start">
                                <Link
                                    to=""
                                    className="w-44 rounded-lg bg-csk-400 p-3 text-center uppercase"
                                >
                                    Realizacje
                                </Link>
                            </div>
                            <span
                                className="absolute left-1 top-2/4 cursor-pointer text-5xl text-csk-50 md:left-8"
                                onClick={toggleLeft}
                            >
                                <GoChevronLeft />
                            </span>
                            <span
                                className="absolute right-1 top-2/4 cursor-pointer text-5xl text-csk-50 lg:right-10"
                                onClick={toggleRight}
                            >
                                <GoChevronRight />
                            </span>
                        </div>
                        <div className="absolute bottom-5 flex w-full items-center justify-center gap-8">
                            {slider.map((itm) => {
                                return (
                                    <span
                                        key={itm.backgroundID}
                                        className={`block h-1 w-10  cursor-pointer ${imageIndex === itm.backgroundID ? 'bg-csk-400' : 'bg-csk-50'}`}
                                        onClick={() => {
                                            setDirection(
                                                itm.backgroundID > imageIndex
                                                    ? 'right'
                                                    : 'left'
                                            )
                                            setImageIndex(itm.backgroundID)
                                        }}
                                    ></span>
                                )
                            })}
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>
        </>
    )
}
