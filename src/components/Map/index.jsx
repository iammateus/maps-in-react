import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import PlaceAutocompleteField from "../PlaceAutocompleteField";

import StyledMap from "./styled/StyledMap";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

function Map() {

    const [mapOptions, setMapOptions] = useState({
        center: {
            lat: -23.51395429999999,
            lng: -46.38868249999999
        },
        zoom: 11
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
                        text="My Marker"
                    />
                </GoogleMapReact>
            </div>

        </StyledMap>
    );

}

export default Map;
