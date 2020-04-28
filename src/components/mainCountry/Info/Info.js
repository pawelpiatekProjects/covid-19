import React from 'react';
import styled from 'styled-components';
import * as variables from '../../../assets/styles/variables';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretDown, faCaretUp} from "@fortawesome/free-solid-svg-icons";

const InfoWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(12,1fr);
  grid-template-rows: repeat(2,max-content);
  grid-gap: 2.5rem;
  
  @media(max-width: 600px){
  grid-template-rows: repeat(5, 1fr);
  grid-template-columns: 1fr;
  }

  
`;

const Cell = styled.div`
  background: ${variables.white};
  grid-column: ${props => props.start}/${props => props.end};
  
  svg{
  margin-right: 1rem;
  }
  
  @media(max-width: 600px){
  grid-column: 1/-1;
  }
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
color:${props => props.color};
margin: 0;
padding: 1rem 0;
`;

const Info = ({data}) => {

    return (
        <>
            <InfoWrapper>
                <Cell start={1} end={7}>
                    <CellHeader>Confirmed cases:</CellHeader>
                    <Case>{data.confirmed}</Case>
                    <Percent color={data.confirmedIncrease < 0 ? variables.red1 : variables.green1}>
                        {data.confirmedIncrease < 0 ? <FontAwesomeIcon icon={faCaretDown}/> : <FontAwesomeIcon icon={faCaretUp}/>}
                        {data.confirmedIncrease}%
                    </Percent>

                </Cell>
                <Cell start={7} end={-1}>
                    <CellHeader>Currently infected:</CellHeader>
                    <Case>{data.activeCases}</Case>
                    <Percent color={data.activeCasesIncrease < 0 ? variables.red1 : variables.green1}>
                        {data.activeCasesIncrease < 0 ?<FontAwesomeIcon icon={faCaretDown}/> : <FontAwesomeIcon icon={faCaretUp}/>}
                        {data.activeCasesIncrease}%
                    </Percent>
                </Cell>
                <Cell start={1} end={5}>
                    <CellHeader>Recovered:</CellHeader>
                    <Case>{data.recovered}</Case>
                    <Percent color={data.recoveredIncrease < 0 ? variables.red1 : variables.green1}>
                        {data.recoveredIncrease < 0 ? <FontAwesomeIcon icon={faCaretDown}/> : <FontAwesomeIcon icon={faCaretUp}/>}
                        {data.recoveredIncrease}%
                    </Percent>
                </Cell>
                <Cell start={5} end={9}>
                    <CellHeader>Deaths:</CellHeader>
                    <Case>{data.deaths}</Case>
                    <Percent color={data.deathIncrease < 0 ? variables.red1 : variables.green1}>
                        {data.deathIncrease < 0 ? <FontAwesomeIcon icon={faCaretDown}/> : <FontAwesomeIcon icon={faCaretUp}/>}
                        {data.deathIncrease}%
                    </Percent>
                </Cell>
                <Cell start={9} end={-1}>
                    <CellHeader>Mortality rate:</CellHeader>
                    <Case>{data.rate}%</Case>
                    <Percent color={data.rateIncrease < 0 ? variables.red1 : variables.green1}>
                        {data.rateIncrease < 0 ? <FontAwesomeIcon icon={faCaretDown}/> : <FontAwesomeIcon icon={faCaretUp}/>}
                        {data.rateIncrease}%
                    </Percent>
                </Cell>
            </InfoWrapper>
        </>
    )
};

export default Info;
