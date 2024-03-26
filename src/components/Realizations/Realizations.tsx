import React, { useEffect, useState } from 'react'
import axios from 'axios'

/* import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry' */

type Props = {}

export default function Realizations({}: Props) {
    useEffect(() => {
        const fetchImages = async () => {
            try {
                const data = await axios.get(
                    `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_API_NAME}/resources`
                )
                console.log(data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchImages()
    }, [])
    const [image, setImage] = useState(null)

    return <div>Realizations</div>
}
