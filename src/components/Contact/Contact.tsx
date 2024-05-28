import ContactForm from '../ContactForm/ContactForm'
import LocationMap from '../Map/LocationMap'

type Props = {}

export default function Contact({}: Props) {
    return (
        <div className="flex w-full flex-col items-start gap-10 p-6 text-center md:text-left lg:py-32 lg:text-left">
            <div className="w-full">
                <h1 className="w-full text-center font-bebasNeue text-4xl  text-csk-600 md:text-center lg:px-40 lg:text-left lg:text-3xl">
                    Kontakt
                </h1>
                <div className="flex w-full flex-col items-center gap-3 text-center font-nunito text-4xl md:text-center lg:w-11/12 lg:items-start  lg:px-40 lg:pt-7 lg:text-left lg:text-xl">
                    <h2 className="w-full text-center font-bebasNeue text-3xl  tracking-wider lg:text-left lg:text-4xl">
                        Kontakt telefoniczny i wizyta przed podpisaniem umowy to
                        dla nas chleb powszedni.
                    </h2>
                    <p className="w-full text-center font-nunito text-2xl lg:w-4/5 lg:text-left">
                        <br /> Po wstępnych rozmowach i wycenie podpisujemy
                        umowę, wchodzimy na miejsce <br />
                        prac , niezwłocznie zabierając się do pracy.
                    </p>
                    <p className="w-1/2 text-center font-nunito text-xl lg:w-4/5 lg:text-left">
                        Jeśli masz więcej pytań, zachęcamy do kontaktu!
                    </p>
                </div>
                <div className="flex w-full flex-col lg:flex-row lg:px-40 lg:pt-12">
                    <div className="flex w-full items-center justify-center lg:w-1/2">
                        <ContactForm />
                    </div>
                    <div className="w-full pt-12 lg:w-1/2    ">
                        <LocationMap />
                    </div>
                </div>
            </div>
        </div>
    )
}
