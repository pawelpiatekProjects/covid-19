import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';
import CountryPreview from '../countryPreview/contryPreviev';
import * as variables from '../../assets/styles/variables';
import Loader from 'react-loader-spinner';

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

const FilterInput = styled.input`
width: 100%;
margin-bottom: 1rem;
padding: .75rem;
`;

const LoadingWrapper = styled.div`
margin: 5rem auto;
width: 100%;
text-align: center;
`;

const CountryPreviewList = () => {

    const [countryList, setCountryList] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        setIsLoading(true);
        const fetch = async () => {
            const {data} = await axios.get(`https://pomber.github.io/covid19/timeseries.json`);
            const keys = Object.keys(data)
            setCountryList(keys);
            setIsLoading(false);
        }
        fetch();
    }, [])

    const getInputValue = e => {
        setInputValue(e.target.value);
    }

    return (

        <CountryPreviewListWrapper>
            <CountryList>
                <ListHeading>Przypadki na świecie</ListHeading>
                <FilterInput placeholder="Search" onChange={getInputValue}/>
                {isLoading ? (
                    <LoadingWrapper>
                        <Loader
                            type="ThreeDots"
                            color={variables.secondaryBlue}
                            height={100}
                            width={100}
                        />
                    </LoadingWrapper>
                ) : (
                    countryList
                        .filter(country => (
                            country.toLowerCase().includes(inputValue.toLowerCase())
                        ))
                        .map(country => (
                            <CountryPreview name={country} key={country}/>
                        ))
                )
                }


            </CountryList>
        </CountryPreviewListWrapper>
    );
};

export default CountryPreviewList;
