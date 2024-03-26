import React, { useEffect, useState } from 'react'

/* import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry' */
const images = require.context('../../images', true)
type Props = {}
export default function Realizations({}: Props) {
    const [image, setImage] = useState(null)

    return <div>Realizations</div>
}
