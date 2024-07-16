import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

export default function LocationMap() {
    return (
        <div className="w-full">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2556.831123675824!2d20.142957!3d50.145591!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47164f005e8030c9%3A0x9bdc299eeb954801!2sKonst-stef!5e0!3m2!1spl!2spl!4v1721150467001!5m2!1spl!2spl"
                loading="lazy"
                className="h-60vh w-full rounded-br-2xl rounded-tl-2xl "
            ></iframe>
        </div>
    )
}
