import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { db } from '../../../firebase';



const Map = () => {

    const mapStyles = {
        height: "100%",
        width: "90%",
        borderRadius: "3%",

    };

    const defaultCenter = {
        lat: 41.3851, lng: 2.1734
    }

    const [selected, setSelected] = useState({});

    const onSelect = item => {
        setSelected(item);
    }

    const [geos, setGeos] = useState([]);

    function getGeo() {
        db.orderBy('date', 'desc').onSnapshot((querySnapshot) => {
            const dataArray = []
            querySnapshot.forEach((doc) => {
                dataArray.push(doc.data());
            });
            setGeos(dataArray)
        });
    }

    useEffect(() => {
        getGeo();
    }, []
    )





    return (
        <LoadScript
            googleMapsApiKey='API-KEY'>
            <GoogleMap
                mapContainerStyle={mapStyles}
                zoom={1}
                center={defaultCenter} >
                {
                    geos.map(item => {
                        return (
                            <Marker key={item.place}
                                anchor={item.place}
                                position={{ lat: item.lat, lng: item.lng }}
                                fillColor={"#FFA500"}

                                onClick={() => onSelect(item)}
                            // icon={{
                            //     path: "M12.75 0l-2.25 2.25 2.25 2.25-5.25 6h-5.25l4.125 4.125-6.375 8.452v0.923h0.923l8.452-6.375 4.125 4.125v-5.25l6-5.25 2.25 2.25 2.25-2.25-11.25-11.25zM10.5 12.75l-1.5-1.5 5.25-5.25 1.5 1.5-5.25 5.25z",
                            //     fillColor: "#FFA500",
                            //     fillOpacity: 1.0,
                            //     strokeWeight: 0,
                            //     scale: 1.25
                            // }}
                            >

                            </Marker>
                        )
                    })
                }
                {selected.location &&
                    //{ lat: selected.lat, lng: selected.lng } &&
                    (
                        <InfoWindow
                            position={selected.location}
                            //{{ lat: selected.lat, lng: selected.lng }}
                            clickable={true}
                            anchor={selected.place}
                            onCloseClick={() => setSelected({})}
                        >
                            <div>
                                <h3 style={{ color: "#FFA500" }}>Warning!</h3>
                                <h4>{selected.text}</h4>
                                <p>{selected.place}</p>

                            </div>
                        </InfoWindow>
                    )
                }

            </GoogleMap >
        </LoadScript>
    )
}

export default Map