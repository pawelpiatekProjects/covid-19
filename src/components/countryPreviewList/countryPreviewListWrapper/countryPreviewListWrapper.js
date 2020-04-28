import React from 'react';
import styled from 'styled-components';
import CountryPreview from '../countryPreview/countryPreview';

const Wrapper = styled.div`
height: 80rem;
`;

const CountryList = styled.div`
height: 100%;
overflow-y: scroll;
`;

const ListHeading = styled.h1`
font-size: 2.5rem;
font-weight: 400;

@media(max-width: 1150px){
font-size: 2rem;
}
`;

const FilterInput = styled.input`
width: 100%;
margin-bottom: 1rem;
padding: .75rem;
`;

//todo: add responisve layout - smaller text

const CountryPreviewListWrapper = ({countryList, inputValue, getInputValue }) => {
    return (
        <Wrapper>
            <ListHeading>Przypadki na świecie</ListHeading>
            <FilterInput placeholder="Search" onChange={getInputValue}/>
            <CountryList>

                {countryList
                    .filter(country => (
                        country.name.toLowerCase().includes(inputValue.toLowerCase())
                    ))
                    .map(country => (
                       <CountryPreview name={country.name} />
                        )
                    )
                }
            </CountryList>
        </Wrapper>
    )
};

export default CountryPreviewListWrapper;
