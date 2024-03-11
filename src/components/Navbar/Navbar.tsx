import Logo from '@/assets/Konst-stef-removebg-preview.png'

type Props = {}

export default function Navbar({}: Props) {
    return (
        <nav>
            <div className="flex  w-full items-center justify-between bg-white p-6">
                <div className="mx-auto flex  h-20 w-5/6 items-center justify-between">
                    <div className="relative  flex h-20 w-full items-center justify-between">
                        <img src={Logo} className=" absolute w-32" />
                    </div>
                </div>
            </div>
        </nav>
    )
}
