import React from 'react'
import { useEffect } from 'react';
import { createAPIEndpoint, ENDPIONTS } from "./api";
export default function AutoModelList(props) {
    const { values, setValues, errors, setErrors,
        handleInputChange, resetFormControls } = props;
        console.log(props)

        useEffect(() => {
            createAPIEndpoint(ENDPIONTS.AUTOMODEL).fatchAllModel()
                .then(res => {
                    console.log("data",res.data)
                    // setFoodItems(res.data);
                    // setSearchList(res.data);
                })
                .catch(err => console.log(err))
    
        }, [])
    return (
        <div>
           <h2>Hello</h2> 
        </div>
    )
}
