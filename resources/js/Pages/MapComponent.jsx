import React, { useState, useEffect } from "react";
import { Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MarkerKu = ({ position, popup }) => {

    return (
        <Marker position={position}>
            <Popup closeOnClick={true}>{popup}</Popup>
        </Marker>
    );
};

export default MarkerKu;
