import React, { useState } from 'react';

import TextField from '../TextField'

function PlaceAutocompleteField() {

    const [place, setPlace] = useState('');

    const handleChange = (event) => {

        let placeFieldValue = event.target.value;

        setPlace(placeFieldValue);

    };

    return (
        <div>
            <label>
                <TextField 
                    placeholder='Search for places'
                    value={place}
                    onChange={handleChange}
                />
            </label>
            <ul> 
                
            </ul>
        </div>
  );
}

export default PlaceAutocompleteField;
