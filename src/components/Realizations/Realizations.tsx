import React, { useEffect, useState } from 'react'
import axios from 'axios'

/* import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry' */

type Props = {}

export default function Realizations({}: Props) {
    useEffect(() => {
        const fetchImages = async () => {
            try {
               
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
