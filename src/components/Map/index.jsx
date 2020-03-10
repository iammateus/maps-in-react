import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react';
import PlaceAutocompleteField from "../PlaceAutocompleteField";

import StyledMap from "./styled/StyledMap";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

function Map(props) {

    return (
        <StyledMap>
            <PlaceAutocompleteField />
            <div style={{ height: '100vh', width: '100%' }}>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
                    defaultCenter={props.center}
                    defaultZoom={props.zoom}
                >
                    <AnyReactComponent
                        lat={props.center.lat}
                        lng={props.center.lng}
                        text="My Marker"
                    />
                </GoogleMapReact>
            </div>
        </StyledMap>
    );

}

export default Map;
