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
                <div className="flex w-5/6 flex-col gap-10 text-center font-nunito text-4xl md:text-center lg:px-40 lg:pt-7 lg:text-left lg:text-xl">
                    <p>
                        Kontakt telefoniczny i wizyta przed podpisaniem umowy to
                        dla nas chleb powszedni.
                        <br /> Po wstępnych rozmowach i wycenie podpisujemy
                        umowę, wchodzimy na miejsce <br />
                        prac , niezwłocznie zabierając się do pracy.
                    </p>
                    <p>Jeśli masz więcej pytań, zachęcamy do kontaktu!</p>
                </div>
                <div className="flex w-full lg:px-40 lg:pt-12">
                    <div className="flex w-1/2 items-center">
                        <ContactForm />
                    </div>
                    <div className="w-1/2 ">
                        <LocationMap />
                    </div>
                </div>
            </div>
        </div>
    )
}
