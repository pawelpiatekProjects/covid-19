import React from 'react';
import styled from 'styled-components';
import * as variables from '../../../assets/styles/variables';

const InfoWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12,1fr);
  grid-template-rows: repeat(2,max-content);
  grid-gap: 2.5rem;

  
`;

const Cell = styled.div`
  background: ${variables.white};
  grid-column: ${props=>props.start}/${props=>props.end};
  padding: 2rem;
`;

const CellHeader = styled.h1`
  font-weight: 500;
  padding: 0;
  margin: 0;
  display: inline-block;
  font-size: 1.6rem;
`;

const Case = styled.p`
display: inline-block;
margin-left: 1rem;
font-weight: 700;
font-size: 2rem;
margin-top: 2rem;
`;

const Percent = styled.p`
font-size: 2rem;
font-weight: 700;
color:${props=>props.color};
margin: 0;
padding: 1rem 0;
`;

const Info = ({data}) =>{

    return(
        <InfoWrapper>
            <Cell start={1} end={7}>
                <CellHeader>Liczba zakażonych w Polsce:</CellHeader>
                <Case>{data.confirmed}</Case>
                <Percent color={data.confirmedIncrease <0 ? variables.red1 : variables.green1}>
                    {data.confirmedIncrease <0 ? '-' : ''}{data.confirmedIncrease}%
                </Percent>
            </Cell>
            <Cell start={7} end={-1}>
                <CellHeader>Aktualnie chorujący:</CellHeader>
                <Case>{data.activeCases}</Case>
                <Percent color={data.activeCasesIncrease <0 ? variables.red1 : variables.green1}>
                    {data.activeCasesIncrease <0 ? '-' : ''}{data.activeCasesIncrease}%
                </Percent>
            </Cell>
            <Cell start={1} end={5}>
                <CellHeader>Wyleczeni:</CellHeader>
                <Case>{data.recovered}</Case>
                <Percent color={data.recoveredIncrease <0 ? variables.red1 : variables.green1}>
                    {data.recoveredIncrease <0 ? '-' : ''}{data.recoveredIncrease}%
                </Percent>
            </Cell>
            <Cell start={5} end={9}>
                <CellHeader>Łączna liczba zbonów:</CellHeader>
                <Case>{data.deaths}</Case>
                <Percent color={data.deathIncrease <0 ? variables.red1 : variables.green1}>
                    {data.deathIncrease <0 ? '-' : ''}{data.deathIncrease}%
                </Percent>
            </Cell>
            <Cell start={9} end={-1}>
                <CellHeader>Śmiertelność:</CellHeader>
                <Case>{data.rate}%</Case>
                <Percent color={data.rateIncrease <0 ? variables.red1 : variables.green1}>
                    {data.rateIncrease <0 ? '-' : ''}{data.rateIncrease}%
                </Percent>
            </Cell>
        </InfoWrapper>
    )
};

export default Info;
