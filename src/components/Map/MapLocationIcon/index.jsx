import React from 'react';

import { IconContext } from "react-icons";
import { MdPlace } from 'react-icons/md';

function MapLocationIcon() {

    return (
        <IconContext.Provider value={{ color: "red", className: "global-class-name", size: '3em' }}>
            <div>
                <MdPlace />
            </div>
        </IconContext.Provider>
    );

}

export default MapLocationIcon;
