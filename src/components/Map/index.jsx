import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import PlaceAutocompleteField from "../PlaceAutocompleteField";
import { IconContext } from "react-icons";
import { MdPlace } from 'react-icons/md';

import StyledMap from "./styled/StyledMap";

const AnyReactComponent = () => (<IconContext.Provider value={{ color: "red", className: "global-class-name", size: '3em' }}>
                                    <div>
                                        <MdPlace />
                                    </div>
                                </IconContext.Provider>)

function Map() {

    const [mapOptions, setMapOptions] = useState({
        center: {
            lat: -23.51395429999999,
            lng: -46.38868249999999
        },
        zoom: 18
    });

    return (
        <StyledMap>
            
            <PlaceAutocompleteField setMapOptions={setMapOptions}/>

            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
                    center={mapOptions.center}
                    defaultZoom={mapOptions.zoom}
                >
                    <AnyReactComponent
                        lat={mapOptions.center.lat}
                        lng={mapOptions.center.lng}
                    />
                </GoogleMapReact>
            </div>

        </StyledMap>
    );

}

export default Map;
