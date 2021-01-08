import React from 'react';
import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import {useEffect, useState} from "react";
import LocationInfoBox from "./LocationInfoBox";

const Map = ({eventData, center, zoom}) => {
    const [locationInfo, setLocationInfo] = useState(null);

    const markers = eventData.map((event, index) => {
        if (event.categories[0].id === 8) {
            const coordinates = event.geometries[0].coordinates;
            return <LocationMarker lat={coordinates[1]} lng={coordinates[0]} key={"marker"+index} onClick={() => setLocationInfo(event)} />
        }
        //return <LocationMarker lat={center.lat} lng={center.lng} key={"marker"+index} />
    });

    return (
        <div className="map">
            <GoogleMapReact
                bootstrapURLKeys={{ key: 'AIzaSyCBYZA4s8l04BsFBxagSthpFZuPsM6XaHE' }}
                defaultCenter={center}
                defaultZoom={zoom}
            >
                {markers}
            </GoogleMapReact>
            { locationInfo && <LocationInfoBox locationInfo={locationInfo} />  }
        </div>
    );
}

Map.defaultProps = {
    center: {
        lat: 42.3265,
        lng: -122.8756
    },
    zoom: 5
};

export default Map;