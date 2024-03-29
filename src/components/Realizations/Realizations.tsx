import React, { useEffect, useState } from 'react'
import firebase from 'firebase/compat/app'
import 'firebase/compat/storage'
import { firebaseConfig } from '@/firebase/config'
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry'

type Props = {}

export default function Realizations({}: Props) {
    const [data, setData] = useState<string[]>([])

    useEffect(() => {
        const fetchImages = async () => {
            firebase.initializeApp(firebaseConfig)
            const storageRef = firebase.storage().ref()
            const imagesRef = storageRef.child('images')
            try {
                const imageUrls: string[] = []
                const listResult = await imagesRef.listAll()
                listResult.items.forEach(async (itemRef) => {
                    const imageUrl = await itemRef.getDownloadURL()
                    imageUrls.push(imageUrl)
                })
                setData(imageUrls)
            } catch (error) {
                console.error('Error fetching images:', error)
            }
        }
        fetchImages()
    }, [setData])
    console.log(data)
    return (
        <div className="flex w-full flex-col items-start gap-10 p-6 text-center md:text-left lg:py-32 lg:text-left">
            <div className="w-full">
                <h1 className="w-full text-center font-bebasNeue text-4xl  text-csk-600 md:text-center lg:px-40 lg:text-left lg:text-3xl">
                    Realizacje
                </h1>
            </div>
            <div className="w-full">
                <div className="flex flex-col items-center gap-7  lg:flex-row lg:pl-40"></div>
            </div>
        </div>
    )
}
