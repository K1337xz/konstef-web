type TSlider = {
    backgroundImage: string
    backgroundID: number
    header: string
    paragraph: string
}

export const slider: TSlider[] = [
    {
        backgroundImage: '/assets/firstHero.jpg',
        backgroundID: 0,
        header: `OD ZERA \n POD KLUCZ`,
        paragraph:
            'Świadczymy usługi w zakresie kompleksowych \n wykończeń mieszkań od stanu deweloperskiego \n do stanu “pod klucz”, gołe “4 ściany” zamienimy \n w przytulne mieszkanie.',
    },
    {
        backgroundImage: '/assets/secondHero.jpg',
        backgroundID: 1,
        header: `REMONTUJEMY PRYWATNE MIESZKANIA`,
        paragraph:
            'Swoje usługi kierujemy do Klientów prywatnych, \n którzy szukają ekipy do remontu lub wykończenia swojego „M”.',
    },
    {
        backgroundImage: '/assets/thirdHero.jpg',
        backgroundID: 2,
        header: `PRACUJEMY \n W MAŁYCH DRUŻYNACH`,
        paragraph:
            'Pracujemy w ekipach 1-3-osobowych \n w zależności od wielkości mieszkania i przeprowadzanych prac.',
    },
]
