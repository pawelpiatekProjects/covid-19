import React from 'react';
import styled from 'styled-components';
import * as variables from '../../../assets/styles/variables';

const CountryDetailsWrapper = styled.div`
width: 80%;
margin: 1rem auto;
`;

const Paragraph = styled.p`
margin: 0;
color: ${variables.white};
`;

const CountryDetails = ({confirmed, deaths, recovered}) =>(
    <CountryDetailsWrapper>
        <Paragraph><span>Potwierdzone przypadki: </span>{confirmed}</Paragraph>
        <Paragraph><span>Przypadki śmiertelne: </span>{deaths}</Paragraph>
        <Paragraph><span>Wyleczeni zakażeni: </span>{recovered}</Paragraph>
    </CountryDetailsWrapper>
);

export default CountryDetails;
