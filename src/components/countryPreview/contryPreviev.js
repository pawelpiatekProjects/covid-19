import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import ReactCountryFlag from 'react-country-flag';
import * as variables from '../../assets/styles/variables';
import axios from 'axios';
import CountryDetails from './countryDetails/countryDetails';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faCaretDown } from '@fortawesome/free-solid-svg-icons';

const CountryPreviewWrapper = styled.div`

`;

const Intro = styled.div`
background: ${variables.white};
box-shadow: 0px 4px 5px -6px rgba(0,0,0,0.75);
padding: 1rem;
margin: 2px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
    &:hover{
    cursor: pointer;
   
    }
`;

const Caret = styled(FontAwesomeIcon)`
  font-size: 1.5rem;
`;

const CountryName = styled.p`

`;

const Details = styled.div`
background: ${variables.primaryBlue};
width: 90%;
margin: 0 auto;
padding: 1rem;
`;

const CountryPreview = ({name}) => {

    const[countryCases, setCountryCases] = useState([]);
    const [all, setAll] = useState(null);
    const [deaths, setDeaths] = useState(null);
    const [recovered, setRecovered] = useState(null);
    const[isDetails, setIsDetails] = useState(false);
    useEffect(()=>{
        axios.get(`https://pomber.github.io/covid19/timeseries.json`)
            .then(response=>{
                setCountryCases(response.data[name])
                return response.data[name];
            })
            .then(country=>{
                // console.log(country[country.length-1].confirmed)
                setAll(country[country.length-1].confirmed);
                setDeaths(country[country.length-1].deaths)
                setRecovered(country[country.length-1].recovered);
            });
    },[]);

    let activeCaret = isDetails ? faCaretDown : faCaretRight;
    return(
            <CountryPreviewWrapper onClick={()=>setIsDetails(!isDetails)}>
                <Intro>
                    <CountryName>{name}</CountryName>

                    <Caret icon={activeCaret}/>
                </Intro>
                {
                    isDetails ? (
                        <Details>
                            <CountryDetails confirmed={all} deaths={deaths} recovered={recovered}/>
                        </Details>
                    ) : null
                }

            </CountryPreviewWrapper>
        );
};

export default CountryPreview;
