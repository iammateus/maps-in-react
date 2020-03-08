import React, { useState } from 'react';

import TextField from '../TextField'
import Axios from 'axios';
import StyledList from './styled/StyledList'
import ListItem from './styled/ListItem'

function PlaceAutocompleteField() {

    const [ place, setPlace ] = useState('');
    const [ apiPredictions, setApiPredictions ] = useState([]);

    const getApiPredictions = async (placeToSearch) => {

        let data = [...apiPredictions];

        if( !placeToSearch ){
            placeToSearch = place;
        }

        if(!(placeToSearch.length % 2 === 0)){
            return data;
        }
        
        const API_URL = process.env.REACT_APP_PROXY_URL + process.env.REACT_APP_GOOGLE_MAPS_API_URL;

        const params = {
            input: placeToSearch,
            key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
        }

        let response =  await Axios.get(API_URL, {
            params
        });

        if(response.status === 200 && response.data && response.data.predictions){
            data = response.data.predictions;
        } 
       
        return data;

    }

    const handleChange = async (event) => {

        const placeFieldValue = event.target.value;

        setPlace(placeFieldValue);

        const apiPredictionsResponse = await getApiPredictions(placeFieldValue);

        if(apiPredictionsResponse){
            setApiPredictions([...apiPredictionsResponse]);
        }

        if(placeFieldValue.length === 0){
            setApiPredictions([]);
        }

    };

    const changePlaceByItemList = (placeName) => {
        setPlace(placeName);
        setApiPredictions([]);
    }

    return (
        <div>
            <label>
                <TextField 
                    placeholder='Search for places'
                    value={place}
                    onChange={handleChange}
                />
            </label>
            <StyledList>
                {
                    apiPredictions && apiPredictions.map((apiPrediction, index) => {

                        let placeName = apiPrediction.structured_formatting.main_text;

                        return (
                            <ListItem onClick={() => {changePlaceByItemList(placeName)}} key={index}>{placeName}</ListItem>
                        );

                    })
                }
            </StyledList>
        </div>
  );
}

export default PlaceAutocompleteField;
