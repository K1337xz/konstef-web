import { useEffect, useState } from 'react'
import firebase from 'firebase/compat/app'
import 'firebase/compat/storage'
import { firebaseConfig } from '@/firebase/config'
import FramerDiv from '../FramerDiv/FramerDiv'
import { useInView } from 'react-intersection-observer'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'
import FullScreenGallery from '../FullScreenGallery/FullScreenGallery'

type Prop = {}

export default function Realizations({}: Prop) {
    const { ref: ref, inView: showMasonry } = useInView()
    const [data, setData] = useState<string[]>([])
    const [clickedImage, setClickedImage] = useState<string>()
    useEffect(() => {
        firebase.initializeApp(firebaseConfig)
        const storageRef = firebase.storage().ref()
        const imagesRef = storageRef.child('images')
        const imageUrls: string[] = []
        const fetchImages = async () => {
            try {
                const listResult = await imagesRef.listAll()
                listResult.items.forEach(async (itemRef) => {
                    const imageUrl = await itemRef.getDownloadURL()
                    imageUrls.push(imageUrl)
                })
            } catch (error) {
                console.error('Error fetching images:', error)
            } finally {
                setData(imageUrls)
            }
        }
        fetchImages()
    }, [])

    const imagesSliced = data.slice(0, 6)

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
                        <div className="flex flex-col items-center gap-7  lg:flex-row lg:px-40 lg:py-32">
                            {showMasonry && (
                                <ResponsiveMasonry
                                    columnsCountBreakPoints={{
                                        350: 1,
                                        768: 2,
                                        900: 3,
                                    }}
                                    className="w-full"
                                >
                                    <Masonry columnsCount={3} gutter="10px">
                                        {imagesSliced.map((itm, i) => (
                                            <img
                                                src={itm}
                                                key={i}
                                                onClick={() => {
                                                    setClickedImage(itm)
                                                }}
                                            />
                                        ))}
                                    </Masonry>
                                </ResponsiveMasonry>
                            )}
                        </div>
                    </div>
                </FramerDiv>
            </div>
            {clickedImage && (
                <FullScreenGallery mainImg={clickedImage} thumbNails={data} />
            )}
        </>
    )
}
