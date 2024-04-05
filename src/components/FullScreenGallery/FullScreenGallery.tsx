type Props = {
    mainImg?: string
    /*     thumbNails: string[]
    data: () => void */
}

export default function FullScreenGallery({ mainImg }: Props) {
    return (
        <div className="fixed top-0 h-full w-full bg-csk-900/95">
            <div className="flex w-full flex-col items-center justify-center gap-4 lg:px-40 lg:py-5">
                <div className="flex h-1/2 w-full items-center justify-center">
                    <img src={mainImg} className="w-4/12" />
                </div>
                <div
                    className="no-scrollbar flex w-full items-center justify-center gap-10 overflow-scroll
                "
                ></div>
            </div>
        </div>
    )
}
