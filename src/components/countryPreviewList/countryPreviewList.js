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
background: ${variables.white};
margin: 0 2rem;
padding: 2rem;
`;

const ListHeading = styled.h1`
font-weight: 400;
font-size: 2rem;
border-bottom: 2px solid #eee;
padding-bottom: 1rem;
color: ${variables.primaryBlue};
font-weight: 500;
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
                setMainCountryData(casesInMainCountry[casesInMainCountry.length-1]);
                const keys = Object.keys(response.data)
                setCountryList(keys)
            })
    }, [])
    return (

        <CountryPreviewListWrapper>
            <MainCountryWrapper>
                <MainCountry data={mainCountryData} />
            </MainCountryWrapper>
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
