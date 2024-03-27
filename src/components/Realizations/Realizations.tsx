import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { imagesRef } from '@/firebase/config'
/* import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry' */

type Props = {}

export default function Realizations({}: Props) {
    const [data, setData] = useState([])
    const [image, setImage] = useState(null)

    useEffect(() => {
        console.log(imagesRef)
    }, [])

    return <div>Realizations</div>
}
