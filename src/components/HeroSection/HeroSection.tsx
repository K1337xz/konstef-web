import Images from '@/components/Images/Images'
import { motion } from 'framer-motion'

type Props = {}

export default function HeroSection({}: Props) {
    return (
        <div className="relative h-full overflow-hidden ">
            <motion.div drag="x" className=" -mt-24 flex h-full items-start">
                <Images />
            </motion.div>
        </div>
    )
}
