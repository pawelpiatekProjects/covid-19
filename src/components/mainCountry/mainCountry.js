import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const MainCountryWrapper = styled.div`

`;

const MainCountryHeader = styled.h1`

`;


const MainCountry = ({data}) => {

console.log(data)
    return (
        <MainCountryWrapper>
            <MainCountryHeader>Przypadki w Polsce</MainCountryHeader>

        </MainCountryWrapper>
    );
};

export default MainCountry;
