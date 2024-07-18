import { MouseEvent, useRef, useEffect } from 'react'
import { IoMdClose } from 'react-icons/io'
import InfiniteScroll from 'react-infinite-scroll-component'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import { FaChevronRight } from 'react-icons/fa6'

type Props = {
    mainImg?: string
    closeFullScreen: () => void
    clickImage: (e: MouseEvent<HTMLImageElement>) => void
    fetchImages: () => void
    thumbnailImages: string[]
}

export default function FullScreenGallery({
    mainImg,
    closeFullScreen,
    thumbnailImages,
    fetchImages,
    clickImage,
}: Props) {
    const imageRefs = useRef<(HTMLDivElement | null)[]>([])

    useEffect(() => {
        // Scroll the thumbnail into view if it matches the mainImg
        const index = thumbnailImages.findIndex((img) => img === mainImg)
        if (index !== -1 && imageRefs.current[index]) {
            imageRefs.current[index]!.scrollIntoView({
                behavior: 'smooth',
                block: 'nearest',
                inline: 'center',
            })
        }
    }, [mainImg, thumbnailImages])

    return (
        <div className="fixed top-0 flex h-full w-full items-center bg-csk-900/95">
            <div className="relative flex w-full flex-col items-center justify-center gap-4 lg:px-40 lg:py-1">
                <IoMdClose
                    className="absolute right-40 top-10 cursor-pointer text-3xl text-csk-100"
                    onClick={closeFullScreen}
                />
                <div className="flex h-1/2 w-full items-center justify-center ">
                    <img src={mainImg} className="w-4/12" />
                </div>
                <div className="no-scrollbar overflow relative w-1/2">
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
                                            border:
                                                mainImg === itm
                                                    ? '1px solid red'
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
                    <FaChevronRight />
                </div>
            </div>
        </div>
    )
}
