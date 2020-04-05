import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import axios from 'axios';

const MainCountryWrapper = styled.div`

`;

const MainCountryHeader = styled.h1`

`;

const MainCountry = () => {
    const[mainCountryCases, setMainCantryCases] = useState([]);

    return (
        <MainCountryWrapper>
            <MainCountryHeader>Przypadki w Polsce</MainCountryHeader>
        </MainCountryWrapper>
    );
};

export default MainCountry;
