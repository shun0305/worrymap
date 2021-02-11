import React, { useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';



const MapTry = () => {

    const mapStyles = {
        height: "100%",
        width: "90%",
        borderRadius: "3%",

    };

    const defaultCenter = {
        lat: 41.3851, lng: 2.1734
    }

    const locations = [
        {
            name: "Location 1",
            location: {
                lat: 40.7127,
                lng: -74.0059
            },
        },
        {
            name: "Location 2",
            location: {
                lat: -.0235,
                lng: 37.9061
            },
        },
        {
            name: "Location 3",
            location: {
                lat: 19.4326,
                lng: -99.1332
            },
        },
        {
            name: "Location 4",
            location: {
                lat: 55.5996,
                lng: 37.2712
            },
        },
        {
            name: "Location 5",
            location: {
                lat: 41.4055,
                lng: 2.1915
            },
        }
    ];

    const [selected, setSelected] = useState({});

    const onSelect = item => {
        setSelected(item);
    }



    return (
        <LoadScript
            googleMapsApiKey='APIKEY'>
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={1}
                center={defaultCenter} >
                {
                    locations.map(item => {
                        return (
                            <Marker key={item.name} position={item.location}

                                onClick={() => onSelect(item)}
                                color="blue" />
                        )
                    })
                }
                {
                    selected.location &&
                    (
                        <InfoWindow
                            position={selected.location}
                            clickable={true}
                            onCloseClick={() => setSelected({})}
                        >
                            <p>{selected.name}</p>
                        </InfoWindow>
                    )
                }
            </GoogleMap >
        </LoadScript>
    )
}

export default MapTry