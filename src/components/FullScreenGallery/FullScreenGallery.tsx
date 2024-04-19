import { MouseEvent, useRef } from 'react'
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
    loadId: number
}

export default function FullScreenGallery({
    mainImg,
    closeFullScreen,
    thumbnailImages,
    fetchImages,
    loadId,
    clickImage,
}: Props) {
    const thumbnailRef = useRef<HTMLDivElement>(null)

    return (
        <div className="fixed top-0 h-full w-full bg-csk-900/95">
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
                                <LazyLoadImage
                                    src={itm}
                                    key={i}
                                    style={
                                        mainImg === itm
                                            ? {
                                                  border: '1px solid red',
                                              }
                                            : { border: 'none' }
                                    }
                                    className="lazyImg"
                                    onClick={clickImage}
                                />
                            ))}
                        </InfiniteScroll>
                    </div>
                    <FaChevronRight />
                </div>
            </div>
        </div>
    )
}
