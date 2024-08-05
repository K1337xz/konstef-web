import leftImg from '@/assets/10.jpg'
type Props = {}

export default function About({}: Props) {
    return (
        <div
            id="#3"
            className="flex w-full flex-col items-start gap-10 p-6 text-center md:text-left lg:py-32 lg:text-left"
        >
            <div className="w-full">
                <h1 className="w-full text-center font-bebasNeue text-4xl  text-csk-600 md:text-center lg:px-40 lg:text-left lg:text-3xl">
                    O nas
                </h1>
            </div>
            <div className="flex w-full ">
                <div className="flex flex-col items-center gap-7 lg:flex-row  lg:px-40">
                    <div className="flex w-full flex-col items-start justify-center gap-7 lg:w-1/2">
                        <h2 className="w-full text-center font-bebasNeue text-3xl  tracking-wider lg:text-left lg:text-4xl">
                            Firma Konst-Stef Grzegorza Stefańczyka
                            <br /> na rynku jest obecna od początku 2019 roku
                        </h2>
                        <p className="w-full text-center font-nunito text-xl lg:w-4/5 lg:text-left">
                            Natomiast doświadczenie w branży
                            wykończeniowo-remontowej właściciel zdobywa od około
                            30 lat. Swoje usługi kierujemy do Klientów
                            prywatnych, którzy szukają ekipy do remontu lub
                            wykończenia swojego „M”. W zakresie materiałów
                            zawsze konsultujemy się z Klientem. Możemy wykonać
                            prace na materiale swoim lub powierzonym, jest to
                            kwestia do uzgodnienia.
                        </p>
                    </div>
                    <div className="w-7/12 md:w-8/12 lg:w-1/3">
                        <img
                            src={leftImg}
                            className="rounded-bl-3xl rounded-tr-3xl"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
