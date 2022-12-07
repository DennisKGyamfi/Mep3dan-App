import React from "react";
// import { useMemo } from "react";
// import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
import { Map, Marker } from "pigeon-maps";

import './contactSection.css'



export default function MainMap() {
//     const { isLoaded } = useLoadScript({
//         googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
//     });

//     if (!isLoaded) return <div>Loading...</div>;
//     return <Map />;
// }

// function Map() {
//     const center = useMemo(() => ({ lat: 44, lng: -80 }), []);

     return (
//         <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
//             <Marker position={center} />
//         </GoogleMap>

         <Map height={380} width={500} defaultCenter={[7.9465, 1.0232]} defaultZoom={4}>
             <Marker width={40} anchor={[7.9465, 1.0232]} />
    </Map>
    );
}
