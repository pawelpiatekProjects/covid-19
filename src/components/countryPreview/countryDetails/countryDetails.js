import React from 'react';
import styled from 'styled-components';

const CountryDetailsWrapper = styled.div`
width: 80%;
margin: 1rem auto;
`;

const Paragraph = styled.p`

`;

const CountryDetails = ({confirmed, deaths, recovered}) =>(
    <CountryDetailsWrapper>
        <Paragraph><span>Potwierdzone przypadki: </span>{confirmed}</Paragraph>
        <Paragraph><span>Przypadki śmiertelne: </span>{deaths}</Paragraph>
        <Paragraph><span>Wyleczeni zakażeni: </span>{recovered}</Paragraph>
    </CountryDetailsWrapper>
);

export default CountryDetails;
