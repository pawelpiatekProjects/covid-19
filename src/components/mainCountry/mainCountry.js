import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import * as variables from '../../assets/styles/variables';

const MainCountryWrapper = styled.div`

`;

const Intro = styled.div`

`;

const MainCountryHeader = styled.h1`
font-weight: 400;
font-size: 2.5rem;
`;

const Cases = styled.div`
margin: 6rem 0 0 3rem;
`;

const Paragraph = styled.p`
font-size: 1.6rem;

span{
font-weight: 500;
}
`;

const ColorSpan = styled.span`
color: ${props=>props.color};
`;


const MainCountry = ({data}) => {

    console.log(data)
    return (
        <MainCountryWrapper>
            <Intro>

                <MainCountryHeader>Przypadki w Polsce</MainCountryHeader>
                <Cases>
                    <Paragraph><span>Potwierdzone przypadki: </span><ColorSpan color={variables.primaryBlue}>{data.confirmed}</ColorSpan></Paragraph>
                    <Paragraph><span>Przypadki śmiertelne: </span><ColorSpan color={variables.red1}>{data.deaths}</ColorSpan></Paragraph>
                    <Paragraph><span>Wyleczone przypadki: </span><ColorSpan color={variables.green1}>{data.recovered}</ColorSpan></Paragraph>
                </Cases>
            </Intro>

        </MainCountryWrapper>
    );
};

export default MainCountry;
