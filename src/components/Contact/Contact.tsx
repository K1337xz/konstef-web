

type Props = {}

export function Contact ({}: Props) {
  return (
    <div className="flex w-full flex-col items-start gap-10 p-6 text-center md:text-left lg:py-32 lg:text-left">
    <div className="w-full">
        <h1 className="w-full text-center font-bebasNeue text-4xl  text-csk-600 md:text-center lg:px-40 lg:text-left lg:text-3xl">
           Kontakt
        </h1>
        <p className='w-full text-opacity-0 '>Kontakt telefoniczny i wizyta przed podpisaniem umowy to dla nas chleb powszedni. Po wstępnych rozmowach i wycenie podpisujemy umowę, wchodzimy na miejsce prac, niezwłocznie zabierając się do pracy.
Jeśli masz więcej pytań, zachęcamy do kontaktu!</p>
   </div>
</div>
  );
}
