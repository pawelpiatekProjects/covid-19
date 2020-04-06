import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import CountryPreview from '../countryPreview/contryPreviev';
import MainCountry from '../mainCountry/mainCountry';
import * as variables from '../../assets/styles/variables';

const CountryPreviewListWrapper = styled.div`
display: grid;
grid-template-columns: 70% 30%;
height: calc(100vh - 12rem);
`;

const MainCountryWrapper = styled.div`
grid-column: 1/span 1;
`;

const CountryList = styled.div`
grid-column: 2/ span 1;
height: 100%;
overflow-y: scroll;
background-color: ${variables.white};
padding: 2rem;

`;

const CountryPreviewList = () => {

    const [countryList, setCountryList] = useState([]);
    const [mainCountryData, setMainCountryData] = useState({});

    useEffect(() => {
        axios.get(`https://pomber.github.io/covid19/timeseries.json`)
            .then(response => {
                const casesInMainCountry = response.data['Poland']
                setMainCountryData(casesInMainCountry[casesInMainCountry.length - 1]);
                const keys = Object.keys(response.data)
                setCountryList(keys)
            })
    }, [])
    return (
        <CountryPreviewListWrapper>
            <MainCountryWrapper>
                <MainCountry data={mainCountryData}/>
            </MainCountryWrapper>
            <CountryList>
                {countryList.map(country => (
                    <CountryPreview name={country} key={country}/>
                ))}
            </CountryList>
        </CountryPreviewListWrapper>
    );
};

export default CountryPreviewList;
