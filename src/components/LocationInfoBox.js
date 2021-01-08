import React from 'react';

const LocationInfoBox = ({locationInfo}) => {

    return (
        <div className={"location-info"}>
            <h2>Event Info</h2>
            <ul>
                <li>ID: {locationInfo.id}</li>
                <li>Title: {locationInfo.title}</li>
            </ul>
        </div>
    );
}

export default LocationInfoBox;