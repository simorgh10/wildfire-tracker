import React from 'react';
import Icon from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/fire-alert"

const LocationMarker = ({lat, lng, onClick}) => {
    return (
        <div className={"location-marker"} onClick={onClick}>
            <Icon icon={locationIcon} className={"location-icon"} />
        </div>
    );
}

// LocationMarker.defaultProps = {
//     lat: 42.3265,
//     lng: -122.8756
// };

export default LocationMarker;