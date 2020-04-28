import React, {useState, useEffect} from 'react';
import CountryInfoWrapper from './countryInfoWrapper/countryInfoWrapper';
import axios from 'axios';
import {APIURL} from '../../assets/APIURL';

const CountryInfo = (props) =>{
    const [countryData, setCountryData] = useState([]);

    useEffect(()=>{
        const fetch = async ()=>{
            const {data} = await axios.get(APIURL);
            const country = data[props.location.state]

            setCountryData(country);
        }
        fetch();
    },[])
    return(
        <CountryInfoWrapper name={props.location.state} data={countryData}/>
    )
};

export default CountryInfo;

