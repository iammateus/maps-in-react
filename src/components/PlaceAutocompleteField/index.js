import React, { useState } from 'react';

import TextField from '../TextField'
import Axios from 'axios';

function PlaceAutocompleteField() {

    const [ place, setPlace ] = useState('');
    const [ apiPredictions, setApiPredictions ] = useState('');

    const getApiPredictions = async (placeToSearch) => {

        if( !placeToSearch ){
            placeToSearch = place;
        }


        if(!(placeToSearch.length % 5 === 0)){
            // return;
        }

        /* 
        const API_URL = process.env.REACT_APP_PROXY_URL + process.env.REACT_APP_GOOGLE_MAPS_API_URL;

        const params = {
            input: placeToSearch,
            key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
        }

        let response =  await Axios.get(API_URL, {
            params
        });

        */let data = [];/*

        if(response.status === 200){
            data = response.data.predictions;
        } 
        */

        data = [
            {
                "description" : "Rua 25 de Março - Centro Histórico de São Paulo, São Paulo - SP, Brasil",
                "id" : "f2144464c5750bf6260d1675c686caea477ca6f9",
                "matched_substrings" : [
                    {
                    "length" : 3,
                    "offset" : 0
                    }
                ],
                "place_id" : "EktSdWEgMjUgZGUgTWFyw6dvIC0gQ2VudHJvIEhpc3TDs3JpY28gZGUgU8OjbyBQYXVsbywgU8OjbyBQYXVsbyAtIFNQLCBCcmFzaWwiLiosChQKEgkHPT1m_1jOlBE3k07A2MKvJhIUChIJKV9sClZYzpQRekug1uZ38e8",
                "reference" : "EktSdWEgMjUgZGUgTWFyw6dvIC0gQ2VudHJvIEhpc3TDs3JpY28gZGUgU8OjbyBQYXVsbywgU8OjbyBQYXVsbyAtIFNQLCBCcmFzaWwiLiosChQKEgkHPT1m_1jOlBE3k07A2MKvJhIUChIJKV9sClZYzpQRekug1uZ38e8",
                "structured_formatting" : {
                    "main_text" : "Rua 25 de Março",
                    "main_text_matched_substrings" : [
                    {
                        "length" : 3,
                        "offset" : 0
                    }
                    ],
                    "secondary_text" : "Centro Histórico de São Paulo, São Paulo - SP, Brasil"
                },
                "terms" : [
                    {
                    "offset" : 0,
                    "value" : "Rua 25 de Março"
                    },
                    {
                    "offset" : 18,
                    "value" : "Centro Histórico de São Paulo"
                    },
                    {
                    "offset" : 49,
                    "value" : "São Paulo"
                    },
                    {
                    "offset" : 61,
                    "value" : "SP"
                    },
                    {
                    "offset" : 65,
                    "value" : "Brasil"
                    }
                ],
                "types" : [ "route", "geocode" ]
            },
            {
                "description" : "Rua Augusta - Cerqueira César, São Paulo - SP, Brasil",
                "id" : "2c347580f6c7390714d4ae32da48949c0dec3cea",
                "matched_substrings" : [
                    {
                    "length" : 3,
                    "offset" : 0
                    }
                ],
                "place_id" : "EjdSdWEgQXVndXN0YSAtIENlcnF1ZWlyYSBDw6lzYXIsIFPDo28gUGF1bG8gLSBTUCwgQnJhc2lsIi4qLAoUChIJB1Au8cxZzpQRfFEASRICSzkSFAoSCfVFrObNWc6UEUOXB7A2gMVu",
                "reference" : "EjdSdWEgQXVndXN0YSAtIENlcnF1ZWlyYSBDw6lzYXIsIFPDo28gUGF1bG8gLSBTUCwgQnJhc2lsIi4qLAoUChIJB1Au8cxZzpQRfFEASRICSzkSFAoSCfVFrObNWc6UEUOXB7A2gMVu",
                "structured_formatting" : {
                    "main_text" : "Rua Augusta",
                    "main_text_matched_substrings" : [
                    {
                        "length" : 3,
                        "offset" : 0
                    }
                    ],
                    "secondary_text" : "Cerqueira César, São Paulo - SP, Brasil"
                },
                "terms" : [
                    {
                    "offset" : 0,
                    "value" : "Rua Augusta"
                    },
                    {
                    "offset" : 14,
                    "value" : "Cerqueira César"
                    },
                    {
                    "offset" : 31,
                    "value" : "São Paulo"
                    },
                    {
                    "offset" : 43,
                    "value" : "SP"
                    },
                    {
                    "offset" : 47,
                    "value" : "Brasil"
                    }
                ],
                "types" : [ "route", "geocode" ]
            },
            {
                "description" : "Rua de Santa Catarina, Porto, Portugal",
                "id" : "7c24e034c6828b60d17e7e69f60561ad023ea32e",
                "matched_substrings" : [
                    {
                    "length" : 3,
                    "offset" : 0
                    }
                ],
                "place_id" : "EiZSdWEgZGUgU2FudGEgQ2F0YXJpbmEsIFBvcnRvLCBQb3J0dWdhbCIuKiwKFAoSCVHmX236ZCQNEWtKUad5WOBGEhQKEgnR5L_O-mQkDREVIVqUnyw3Ig",
                "reference" : "EiZSdWEgZGUgU2FudGEgQ2F0YXJpbmEsIFBvcnRvLCBQb3J0dWdhbCIuKiwKFAoSCVHmX236ZCQNEWtKUad5WOBGEhQKEgnR5L_O-mQkDREVIVqUnyw3Ig",
                "structured_formatting" : {
                    "main_text" : "Rua de Santa Catarina",
                    "main_text_matched_substrings" : [
                    {
                        "length" : 3,
                        "offset" : 0
                    }
                    ],
                    "secondary_text" : "Porto, Portugal"
                },
                "terms" : [
                    {
                    "offset" : 0,
                    "value" : "Rua de Santa Catarina"
                    },
                    {
                    "offset" : 23,
                    "value" : "Porto"
                    },
                    {
                    "offset" : 30,
                    "value" : "Portugal"
                    }
                ],
                "types" : [ "route", "geocode" ]
            },
            {
                "description" : "Rua José Paulino - Bom Retiro, São Paulo - SP, Brasil",
                "id" : "f806e9ab605bd6b07e8f50e43eef5c241479f059",
                "matched_substrings" : [
                    {
                    "length" : 3,
                    "offset" : 0
                    }
                ],
                "place_id" : "EjdSdWEgSm9zw6kgUGF1bGlubyAtIEJvbSBSZXRpcm8sIFPDo28gUGF1bG8gLSBTUCwgQnJhc2lsIi4qLAoUChIJwyuHeGdYzpQRh8ucCrfRvBESFAoSCeOMTBJvWM6UESWWaCQqu-iN",
                "reference" : "EjdSdWEgSm9zw6kgUGF1bGlubyAtIEJvbSBSZXRpcm8sIFPDo28gUGF1bG8gLSBTUCwgQnJhc2lsIi4qLAoUChIJwyuHeGdYzpQRh8ucCrfRvBESFAoSCeOMTBJvWM6UESWWaCQqu-iN",
                "structured_formatting" : {
                    "main_text" : "Rua José Paulino",
                    "main_text_matched_substrings" : [
                    {
                        "length" : 3,
                        "offset" : 0
                    }
                    ],
                    "secondary_text" : "Bom Retiro, São Paulo - SP, Brasil"
                },
                "terms" : [
                    {
                    "offset" : 0,
                    "value" : "Rua José Paulino"
                    },
                    {
                    "offset" : 19,
                    "value" : "Bom Retiro"
                    },
                    {
                    "offset" : 31,
                    "value" : "São Paulo"
                    },
                    {
                    "offset" : 43,
                    "value" : "SP"
                    },
                    {
                    "offset" : 47,
                    "value" : "Brasil"
                    }
                ],
                "types" : [ "route", "geocode" ]
            },
            {
                "description" : "Rua Augusta, Lisboa, Portugal",
                "id" : "f728d7fc7aa367c6f7e9b8129b023bc725a13784",
                "matched_substrings" : [
                    {
                    "length" : 3,
                    "offset" : 0
                    }
                ],
                "place_id" : "Eh1SdWEgQXVndXN0YSwgTGlzYm9hLCBQb3J0dWdhbCIuKiwKFAoSCekeywN5NBkNEZNNGdb_qy0_EhQKEgk78-RhGjMZDRHQNpDkvesABA",
                "reference" : "Eh1SdWEgQXVndXN0YSwgTGlzYm9hLCBQb3J0dWdhbCIuKiwKFAoSCekeywN5NBkNEZNNGdb_qy0_EhQKEgk78-RhGjMZDRHQNpDkvesABA",
                "structured_formatting" : {
                    "main_text" : "Rua Augusta",
                    "main_text_matched_substrings" : [
                    {
                        "length" : 3,
                        "offset" : 0
                    }
                    ],
                    "secondary_text" : "Lisboa, Portugal"
                },
                "terms" : [
                    {
                    "offset" : 0,
                    "value" : "Rua Augusta"
                    },
                    {
                    "offset" : 13,
                    "value" : "Lisboa"
                    },
                    {
                    "offset" : 21,
                    "value" : "Portugal"
                    }
                ],
                "types" : [ "route", "geocode" ]
            }
        ];

        return data;

    }

    const handleChange = async (event) => {

        let placeFieldValue = event.target.value;

        setPlace(placeFieldValue);

        let apiPredictionsResponse = await getApiPredictions(placeFieldValue);

        // console.log("apiPredictionsResponse", apiPredictionsResponse);

        setApiPredictions([...apiPredictionsResponse]);

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
