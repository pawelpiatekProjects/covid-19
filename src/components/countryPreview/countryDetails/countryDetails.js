import React from 'react';
import styled from 'styled-components';
import * as variables from '../../../assets/styles/variables';
import ColorSpan from '../../../assets/reusable/components/colorSpan';

const CountryDetailsWrapper = styled.div`
width: 80%;
margin: 1rem auto;
`;

const Paragraph = styled.p`
margin: 0 auto .5rem auto;
color: ${variables.white};
font-size: 1.4rem;


span{
font-weight: 500;
}
`;

const CountryDetails = ({confirmed, deaths, recovered}) =>(
    <CountryDetailsWrapper>
        <Paragraph><span>Potwierdzone przypadki: </span><ColorSpan color={variables.white}>{confirmed}</ColorSpan></Paragraph>
        <Paragraph><span>Przypadki śmiertelne: </span><ColorSpan color={variables.red1}>{deaths}</ColorSpan></Paragraph>
        <Paragraph><span>Wyleczeni zakażeni: </span><ColorSpan color={variables.green1}>{recovered}</ColorSpan></Paragraph>
    </CountryDetailsWrapper>
);

export default CountryDetails;
