import { slider } from '@/images'
type Props = {}

export default function Images({}: Props) {
    return (
        <>
            {slider.map((itm) => {
                return (
                    <div
                        key={itm.backgroundID}
                        style={{
                            backgroundImage: `linear-gradient(rgb(32 45 70), rgb(32 45 70 / 61%)), url(${itm.backgroundImage})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                        }}
                        className=" aspect-video h-full w-screen shrink-0 rounded-xl object-cover"
                    ></div>
                )
            })}
        </>
    )
}
