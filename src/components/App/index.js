import React, { useState } from 'react';
import Map from '../Map';


function App() {

    const [mapOptions, setMapOptions] = useState({
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    });

    return (
        <Map {...mapOptions} />
    );
}

export default App;
