import React, {useState,useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import CountryPreview from '../countryPreview/contryPreviev';

const CountryPreviewListWrapper = styled.div`

`;

const CountryPreviewList = () =>{

    const[countryList, setCountryList] = useState([])

    useEffect(()=>{
        axios.get(`https://pomber.github.io/covid19/timeseries.json`)
            .then(response=>{
                const keys = Object.keys(response.data)
                setCountryList(keys)
            })
    })
    return(
        <CountryPreviewListWrapper>
            {countryList.map(country=>(
                <CountryPreview name={country}/>
            ))}
        </CountryPreviewListWrapper>
    );
};

export default CountryPreviewList;
