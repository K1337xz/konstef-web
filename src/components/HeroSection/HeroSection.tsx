import Carusel from '@/components/Carusel/Carusel'

type Props = {}

export default function HeroSection({}: Props) {
    return (
        <div className="relative h-full overflow-hidden ">
            <Carusel />
        </div>
    )
}
