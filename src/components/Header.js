import React from 'react';
import locationIcon from '@iconify/icons-mdi/fire-alert'
import Icon from "@iconify/react";

const Header = () => {
    return (
        <div className={"header"}>
            <h1><Icon icon={locationIcon} /> Wildfire Tracker (NASA powered)</h1>
        </div>
    );
}

export default Header;