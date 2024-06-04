import React, {useState} from 'react';
import { Marker, Popup, useMapEvents} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MapComponent = () => {
    const [position, setPosition] = useState(null)
    const map = useMapEvents({
        click() {
            map.locate()
        },
        locationfound(e) {
            setPosition(e.latlng)
            map.flyTo(e.latlng, map.getZoom())
        },
    })
//   const position = [51.505, -0.09]; // Koordinat default
    return position === null ? null : (
        <Marker position={position}>
            <Popup>You are here</Popup>
        </Marker>
    )
};

export default MapComponent;
