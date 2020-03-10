import React, { useState, useEffect } from 'react';

import TextField from '../TextField'
import Axios from 'axios';
import StyledList from './styled/StyledList'
import ListItem from './styled/ListItem'
import StyledPlaceAutocompleteField from './styled/StyledPlaceAutocompleteField'

function PlaceAutocompleteField(props) {

    const [ place, setPlace ] = useState('');
    const [ apiPredictions, setApiPredictions ] = useState([]);
    const [ placeId, setPlaceId ] = useState(null);

    useEffect(() => {
        setMapOptions();
    }, [placeId]); 

    const setMapOptions = async (placeToSearch) => {

        const API_URL = process.env.REACT_APP_PROXY_URL + process.env.REACT_APP_GOOGLE_MAPS_PLACE_DETAILS_API_URL;

        const params = {
            place_id: placeId,
            key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
        }

        let response =  await Axios.get(API_URL, {
            params
        });

        if(response.status === 200 && response.data && response.data.result){

            const mapOptions = {
                center: {
                    lat: response.data.result.geometry.location.lat,
                    lng: response.data.result.geometry.location.lng
                },
                zoom: 11
            };

            props.setMapOptions({...mapOptions});

        } 
       
    }

    const getApiPredictions = async (placeToSearch) => {

        let data = [...apiPredictions];

        if( !placeToSearch ){
            placeToSearch = place;
        }

        if(!(placeToSearch.length % 2 === 0)){
            return data;
        }
        
        const API_URL = process.env.REACT_APP_PROXY_URL + process.env.REACT_APP_GOOGLE_MAPS_PLACE_AUTOCOMPLETE_API_URL;

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

    const selectPlace = (selectedPlace) => {

        let selectedPlaceName = selectedPlace.structured_formatting.main_text;
        let selectedPlaceId = selectedPlace.place_id;

        setPlace(selectedPlaceName);
        setPlaceId(selectedPlaceId);
        setApiPredictions([]);
    }

    return (
        <StyledPlaceAutocompleteField>
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
                            <ListItem onClick={() => {selectPlace(apiPrediction)}} key={index}>{placeName}</ListItem>
                        );

                    })
                }
            </StyledList>
        </StyledPlaceAutocompleteField>
  );
}

export default PlaceAutocompleteField;
