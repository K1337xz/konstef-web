import { ReactNode, useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'

type Props = {
    variantHidden: { opacity: number; y: number }
    variantVisible: { opacity: number; y: number }
    children: ReactNode
}

export default function FramerDiv({
    variantHidden,
    variantVisible,
    children,
}: Props) {
    const ref = useRef<HTMLDivElement>(null)
    const isInView = useInView(ref, { once: true })
    const mainControls = useAnimation()
    const slideControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start('visible')
            slideControls.start('visible')
        }
    })
    return (
        <div
            ref={ref}
            style={{ position: 'relative', overflow: 'hidden' }}
            className="w-full"
        >
            <motion.div
                variants={{
                    hidden: variantHidden,
                    visible: variantVisible,
                }}
                initial="hidden"
                animate={mainControls}
                transition={{ duration: 0.9, delay: 0.7 }}
                style={{ width: '100%' }}
            >
                {children}
            </motion.div>
        </div>
    )
}
