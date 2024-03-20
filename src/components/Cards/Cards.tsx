import { LuPenSquare, LuKeyRound } from 'react-icons/lu'
import { GoPeople } from 'react-icons/go'

type Props = {}

export default function Cards({}: Props) {
    return (
        <div className="flex w-full flex-row flex-wrap  justify-center gap-7  pt-1">
            <div className="grid grid-cols-auto-fit-100  gap-4 p-6 lg:w-full lg:px-40">
                <div className="card px-8  py-10">
                    <div className="flex h-full w-full flex-col items-center gap-10 lg:items-start">
                        <LuPenSquare className="text-5xl" />
                        <p className="font-bebasNeue text-3xl">
                            REMONTUJEMY PRYWATNE MIESZKANIA
                        </p>
                        <p className="w-80 text-center font-nunito text-xl lg:text-left">
                            Swoje usługi kierujemy do Klientów prywatnych,
                            którzy szukają ekipy do remontu lub wykończenia
                            swojego „M”.
                        </p>
                    </div>
                </div>
                <div className="card px-8  py-10">
                    <div className="flex h-full w-full flex-col items-center gap-10 lg:items-start">
                        <LuKeyRound className="text-5xl" />
                        <p className="font-bebasNeue text-3xl">
                            OD ZERA POD KLUCZ
                        </p>
                        <p className="w-80 text-center font-nunito text-xl lg:text-left">
                            Świadczymy usługi w zakresie kompleksowych wykończeń
                            mieszkań od stanu deweloperskiego do stanu “pod
                            klucz”.
                        </p>
                    </div>
                </div>
                <div className="card px-8  py-10">
                    <div className="flex h-full w-full flex-col items-center gap-10 lg:items-start">
                        <GoPeople className="text-5xl" />
                        <p className="font-bebasNeue text-3xl">
                            PRACUJEMY W MAŁYCH DRUŻYNACH
                        </p>
                        <p className="w-80 text-center  font-nunito text-xl lg:text-left">
                            Pracujemy w ekipach 1-3-osobowych w zależności od
                            wielkości mieszkania i przeprowadzanych prac.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
