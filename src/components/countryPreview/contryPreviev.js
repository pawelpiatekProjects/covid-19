import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import ReactCountryFlag from 'react-country-flag';
import * as variables from '../../assets/styles/variables';
import axios from 'axios';

const CountryPreviewWrapper = styled.div`
background: ${variables.primaryGrey};
padding: 1rem;
margin: 1rem;
    &:hover{
    cursor: pointer;
    background: ${variables.primaryGreyHover};
    }
`;

const Intro = styled.div`

`;

const CountryFlag = styled.div`

`;

const CountryName = styled.p`

`;

const Details = styled.div`

`;

const CountryPreview = ({name}) => {

    const[countryCases, setCountryCases] = useState([]);
    const[isDetails, setIsDetails] = useState(false);
    useEffect(()=>{
        axios.get(`https://pomber.github.io/covid19/timeseries.json`)
            .then(response=>{
                setCountryCases(response.data[name])
            })
    },[])
    return(
            <CountryPreviewWrapper onClick={()=>setIsDetails(!isDetails)}>
                <Intro>
                    <CountryFlag>
                        {/*<ReactCountryFlag countryCode="" svg aria-label="United States" clasName="emojiFlag"/>*/}
                    </CountryFlag>
                    <CountryName>{name}</CountryName>
                </Intro>
                {
                    isDetails ? (
                        <Details>
                            {countryCases.map(country=>(
                                <div>
                                    <p>{country.date}</p>
                                </div>
                            ))}
                        </Details>
                    ) : null
                }

            </CountryPreviewWrapper>
        );
};

export default CountryPreview;
