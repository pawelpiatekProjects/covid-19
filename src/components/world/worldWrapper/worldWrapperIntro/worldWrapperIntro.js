import React from 'react';
import styled from 'styled-components';
import * as variables from '../../../../assets/styles/variables';
import SmallChart from '../../../charts/smallChart';
import Loader from '../../../../assets/reusable/components/loader';


const Wrapper = styled.div`
display: grid;
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: max-content;
    grid-gap: 5rem;
    margin: 5rem auto;
   
`;

const Cell = styled.div`
  grid-column: ${props => props.start} / span 1;
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

const WorldWrapperIntro = ({lastDayConfirmed, lastDayDeaths, lastDatRecovered, data}) => {


        return (
            <Wrapper>
                <Cell start={1}>
                    <CellHeader>Potwierdzone przypadki: <span>{lastDayConfirmed}</span></CellHeader>
                    {data.length > 0 ? <SmallChart
                        height="10"
                        data={data}
                        dataKey="confirmed"
                        color={variables.primaryBlue}/> : <Loader/>}

                </Cell>
                <Cell start={2}>
                    <CellHeader>Zgony: <span>{lastDayDeaths}</span></CellHeader>
                    {data.length > 0 ? <SmallChart
                        height="10"
                        data={data}
                        dataKey="deaths"
                        color={variables.red1}
                    /> : <Loader/>}
                </Cell>
                <Cell start={3}>
                    <CellHeader>Wyleczoni: <span>{lastDatRecovered}</span></CellHeader>
                    {data.length > 0 ? <SmallChart
                        height="10"
                        data={data}
                        dataKey="recovered"
                        color={variables.green1}
                    /> : <Loader/>}
                </Cell>
            </Wrapper>
        )



};

export default WorldWrapperIntro;
