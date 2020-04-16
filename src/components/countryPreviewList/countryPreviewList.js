import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import CountryPreview from '../countryPreview/contryPreviev';
import MainCountry from '../mainCountry/mainCountry';
import * as variables from '../../assets/styles/variables';

const CountryPreviewListWrapper = styled.div`
height: 80rem;
`;


const ListHeading = styled.h1`
font-size: 2.5rem;
font-weight: 400;
`;

const CountryList = styled.div`
height: 100%;
overflow-y: scroll;
`;

const CountryPreviewList = () => {

    const [countryList, setCountryList] = useState([]);
    const [mainCountryData, setMainCountryData] = useState({});

    useEffect(() => {
        axios.get(`https://pomber.github.io/covid19/timeseries.json`)
            .then(response => {
                const casesInMainCountry = response.data['Poland']
                setMainCountryData(casesInMainCountry[casesInMainCountry.length-1]);
                const keys = Object.keys(response.data)
                setCountryList(keys)
            })
    }, [])
    return (

        <CountryPreviewListWrapper>
            <CountryList>
                <ListHeading>Przypadki na świecie</ListHeading>
                {countryList.map(country => (
                    <CountryPreview name={country} key={country}/>
                ))}
            </CountryList>
        </CountryPreviewListWrapper>
    );
};

export default CountryPreviewList;
