import { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import InfiniteScroll from 'react-infinite-scroll-component'
import FramerDiv from '../FramerDiv/FramerDiv'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import firebase from 'firebase/compat/app'
import { firebaseConfig } from '@/firebase/config'
import FullScreenGallery from '../FullScreenGallery/FullScreenGallery'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import 'firebase/compat/storage'
import 'react-lazy-load-image-component/src/effects/blur.css'

type Prop = {}

export default function Realizations({}: Prop) {
    const { ref: ref, inView: showMasonry } = useInView()
    const [data, setData] = useState<string[][]>([])
    const [images, setImages] = useState<string[]>([])
    const [clickedImage, setClickedImage] = useState<string>()
    const [loadId, setLoadId] = useState(0)
    const [clicked, setClicked] = useState(false)

    const splitArray = (arr: string[], size: number) => {
        const result: string[][] = []
        let index = 0
        while (index < arr.length) {
            result.push(arr.slice(index, index + size))
            index += size
        }
        console.log(result)
        return result
    }

    const fetchMoreImages = () => {
        setLoadId((prev) => prev + 1)
    }

    useEffect(() => {
        firebase.initializeApp(firebaseConfig)
        const storageRef = firebase.storage().ref()
        const imagesRef = storageRef.child('images')
        const fetchImages = async () => {
            try {
                const listResult = await imagesRef.listAll()
                const imageUrls: string[] = []

                await Promise.all(
                    listResult.items.map(async (itemRef) => {
                        const imageUrl = await itemRef.getDownloadURL()
                        imageUrls.push(imageUrl)
                    })
                )
                const splittedArray = splitArray(imageUrls, 10)
                setData(splittedArray)
                setImages(splittedArray[0])
            } catch (error) {
                console.error('Error fetching images:', error)
            }
        }

        fetchImages()
    }, [])

    useEffect(() => {
        if (loadId < data.length) {
            setImages((prevImages) => [...prevImages, ...data[loadId]])
        }
        console.log(images.length)
    }, [clicked])

    return (
        <>
            <div
                className="flex w-full flex-col items-start gap-10 p-6 text-center md:text-left lg:py-32 lg:text-left"
                ref={ref}
            >
                <FramerDiv
                    variantHidden={{ opacity: 0, y: 75 }}
                    variantVisible={{ opacity: 1, y: 0 }}
                >
                    <div className="w-full">
                        <h1 className="w-full text-center font-bebasNeue text-4xl  text-csk-600 md:text-center lg:px-40 lg:text-left lg:text-3xl">
                            Realizacje
                        </h1>
                    </div>
                    <div className="w-full">
                        <div className="flex flex-col items-center justify-center gap-7  lg:flex-row lg:px-40 lg:py-32">
                            {showMasonry && (
                                <div className="w-full">
                                    <InfiniteScroll
                                        dataLength={images.length}
                                        next={fetchMoreImages}
                                        hasMore={loadId < data.length - 1}
                                        loader={<h4>load</h4>}
                                        endMessage={
                                            <p>No more images to load</p>
                                        }
                                        style={{ width: '100%' }}
                                    >
                                        <ResponsiveMasonry
                                            columnsCountBreakPoints={{
                                                350: 1,
                                                768: 2,
                                                900: 3,
                                            }}
                                            className="w-full"
                                        >
                                            <Masonry
                                                columnsCount={3}
                                                gutter="10px"
                                            >
                                                {images?.map((itm, i) => (
                                                    <LazyLoadImage
                                                        src={itm}
                                                        key={i}
                                                        onClick={() => {
                                                            setClickedImage(itm)
                                                        }}
                                                        effect="blur"
                                                    />
                                                ))}
                                            </Masonry>
                                        </ResponsiveMasonry>
                                    </InfiniteScroll>
                                </div>
                            )}
                        </div>
                    </div>
                </FramerDiv>
                <p
                    onClick={() => {
                        setClicked((prev) => !prev)
                    }}
                >
                    CLICKKCKCKCKKCKCKC
                </p>
            </div>
            {clickedImage && <FullScreenGallery mainImg={clickedImage} />}
        </>
    )
}
