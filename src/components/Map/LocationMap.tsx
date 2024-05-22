import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

export interface ILocationMapProps {}

export default function LocationMap(props: ILocationMapProps) {
    return (
        <MapContainer
            style={{ width: '80vh', height: '60vh' }}
            center={[50.145370676317825, 20.142895333815638]}
            zoom={17}
            scrollWheelZoom={true}
            className="rounded-lg"
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[50.145370676317825, 20.142895333815638]}>
                <Popup>Pietrzejowice 44a, 32-010 Kocmyrzów</Popup>
            </Marker>
        </MapContainer>
    )
}
