import { MouseEvent, useRef, useEffect } from 'react'
import { IoMdClose } from 'react-icons/io'
import InfiniteScroll from 'react-infinite-scroll-component'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa6'

type Props = {
    mainImg?: string
    closeFullScreen: () => void
    clickImage: (e: MouseEvent<HTMLImageElement>) => void
    fetchImages: () => void
    thumbnailImages: string[]
    setMainImg: (img: string) => void // Add this prop to set the main image
}

export default function FullScreenGallery({
    mainImg,
    closeFullScreen,
    thumbnailImages,
    fetchImages,
    clickImage,
    setMainImg,
}: Props) {
    const imageRefs = useRef<(HTMLDivElement | null)[]>([])

    useEffect(() => {
        const index = thumbnailImages.findIndex((img) => img === mainImg)
        if (index !== -1 && imageRefs.current[index]) {
            imageRefs.current[index]!.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center',
            })
        }
    }, [mainImg, thumbnailImages])

    const handleNextImage = () => {
        const currentIndex = thumbnailImages.findIndex((img) => img === mainImg)
        if (currentIndex !== -1 && currentIndex < thumbnailImages.length - 1) {
            setMainImg(thumbnailImages[currentIndex + 1])
        }
    }

    const handlePreviousImage = () => {
        const currentIndex = thumbnailImages.findIndex((img) => img === mainImg)
        if (currentIndex > 0) {
            setMainImg(thumbnailImages[currentIndex - 1])
        }
    }

    return (
        <div className="fixed top-0 flex h-full w-full items-center bg-csk-900/95">
            <div className="relative flex  w-full flex-col items-center justify-center gap-4 pt-3 lg:px-40 lg:py-1">
                <IoMdClose
                    className="absolute -top-10 right-7 cursor-pointer text-3xl text-csk-100 lg:right-40 lg:top-10"
                    onClick={closeFullScreen}
                />
                <div className="flex h-full w-full items-center justify-center lg:h-1/2 ">
                    <div className="flex w-24 items-center justify-center">
                        <FaChevronLeft
                            className="cursor-pointer text-3xl text-csk-50 "
                            onClick={handlePreviousImage}
                        />
                    </div>
                    <img src={mainImg} className="w-4/5 lg:w-4/12" />
                    <div className="flex w-24 items-center justify-center">
                        <FaChevronRight
                            className="cursor-pointer text-3xl text-csk-50 "
                            onClick={handleNextImage}
                        />
                    </div>
                </div>
                <div className="no-scrollbar overflow relative flex w-11/12 items-center lg:w-1/2">
                    <div
                        id="scrollableDiv"
                        style={{
                            height: 'auto',
                            width: '100%',
                            display: 'flex',
                            overflow: 'scroll',
                        }}
                        className="no-scrollbar"
                    >
                        <InfiniteScroll
                            dataLength={thumbnailImages.length}
                            next={fetchImages}
                            hasMore={false}
                            loader={<h4></h4>}
                            endMessage={<p></p>}
                            style={{
                                width: '100%',
                                display: 'flex',
                                gap: '20px',
                                overflow: 'scroll',
                            }}
                            className="no-scrollbar"
                            scrollableTarget="scrollableDiv"
                        >
                            {thumbnailImages.map((itm, i) => (
                                <div
                                    key={i}
                                    ref={(el) => (imageRefs.current[i] = el)}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: '100px',
                                        height: '100px',
                                        flexShrink: 0,
                                    }}
                                >
                                    <LazyLoadImage
                                        src={itm}
                                        style={{
                                            borderRadius: '5px',
                                            border:
                                                mainImg === itm
                                                    ? '3px solid #96AACF'
                                                    : 'none',
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                        }}
                                        className="lazyImg"
                                        onClick={clickImage}
                                    />
                                </div>
                            ))}
                        </InfiniteScroll>
                    </div>
                </div>
            </div>
        </div>
    )
}
