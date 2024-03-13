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
                        className=" relative aspect-video h-full w-screen shrink-0 rounded-xl object-cover"
                    >
                        <div className=" flex h-full w-full flex-col items-center justify-center  p-6 lg:items-start">
                            <div className="flex w-full flex-col gap-8 lg:mx-40">
                                <h1 className="w-full whitespace-pre-line text-center font-bebasNeue text-7xl text-csk-50  md:text-8xl lg:w-1/2 lg:text-left lg:text-9xl">
                                    {itm.header}
                                </h1>
                                <p className="lg:full w-full whitespace-pre-line text-center font-nunito text-xl font-light italic text-csk-50 md:text-3xl lg:text-left">
                                    {itm.paragraph}
                                </p>
                            </div>
                        </div>
                    </div>
                )
            })}
        </>
    )
}
