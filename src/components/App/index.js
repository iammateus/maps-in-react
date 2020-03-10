import React, { useState } from 'react';
import PlaceAutocompleteField from '../PlaceAutocompleteField';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

function App() {

    const [mapOptions, setMapOptions] = useState({
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    });

    return (
        <div className="App">

            <PlaceAutocompleteField />

            <div style={{ height: '100vh', width: '100%' }}>

                <GoogleMapReact
                    bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
                    defaultCenter={mapOptions.center}
                    defaultZoom={mapOptions.zoom}
                >

                <AnyReactComponent
                    lat={mapOptions.center.lat}
                    lng={mapOptions.center.lng}
                    text="My Marker"
                />

                </GoogleMapReact>

            </div>

        </div>
    );
}

export default App;
