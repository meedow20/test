import React, { Component } from "react";
import {MapContainer, TileLayer, Marker, Popup, Polygon} from "react-leaflet";


const MyMap = (props) => {

    const center = [51.505, -0.09]

    const polygon = [
        [
            [51.51, -0.12],
            [51.51, -0.13],
            [51.53, -0.13]
        ]
    ]

    let coordinates = Object.keys(polygon).map(сoordinate => <div> {polygon[сoordinate] + " "} </div> )

    return(

    <MapContainer center={center} zoom={13} scrollWheelZoom={false}>
        <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Polygon positions={polygon}>
            <Popup>
                 {coordinates}
            </Popup>
        </Polygon>
    </MapContainer>)

}

export default MyMap;