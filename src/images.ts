import first from '../src/assets/firstHero.jpg'
import sec from '../src/assets/secondHero.jpg'
import third from '../src/assets/thirdHero.jpg'

type TSlider = {
    backgroundImage: string
    backgroundID: number
    header: string
    paragraph: string
}

export const slider: TSlider[] = [
    {
        backgroundImage: first,
        backgroundID: 0,
        header: `OD ZERA \n POD KLUCZ`,
        paragraph:
            'Świadczymy usługi w zakresie kompleksowych \n wykończeń mieszkań od stanu deweloperskiego \n do stanu “pod klucz”, gołe “4 ściany” zamienimy \n w przytulne mieszkanie.',
    },
    {
        backgroundImage: sec,
        backgroundID: 1,
        header: `WYKAŃCZAMY I REMONTUJEMY`,
        paragraph:
            'Swoje usługi kierujemy do Klientów prywatnych, \n którzy szukają ekipy do remontu lub wykończenia swojego „M”.',
    },
    {
        backgroundImage: third,
        backgroundID: 2,
        header: `PRACUJEMY \n W MAŁYCH DRUŻYNACH`,
        paragraph:
            'Pracujemy w ekipach 1-3-osobowych \n w zależności od wielkości mieszkania i przeprowadzanych prac.',
    },
]
