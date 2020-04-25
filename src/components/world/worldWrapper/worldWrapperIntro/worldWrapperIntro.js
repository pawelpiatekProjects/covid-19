import React from 'react';
import styled from 'styled-components';
import * as variables from '../../../../assets/styles/variables';

const Wrapper = styled.div`
display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-gap: 5rem;
    margin: 5rem auto;
   
`;

const Cell = styled.div`
  grid-column: ${props=>props.start} / span 1;
  background-color: ${variables.white};
   padding: 3rem;
`;

const CellHeader = styled.p`
font-size: 1.6rem;
font-weight: 500;

    span{
    color: ${variables.lineChart1};
    }

`;

const WorldWrapperIntro = ({lastDayConfirmed, lastDayDeaths, lastDatRecovered}) =>{
    return(
        <Wrapper>
            <Cell start={1} >
                <CellHeader>Potwierdzone przypadki: <span>{lastDayConfirmed}</span></CellHeader>
            </Cell>
            <Cell start={2} >
                <CellHeader>Zgony: <span>{lastDayDeaths}</span></CellHeader>
            </Cell>
            <Cell start={3} >
                <CellHeader>Wyleczoni: <span>{lastDatRecovered}</span></CellHeader>
            </Cell>
        </Wrapper>
    )
};

export default WorldWrapperIntro;
