import React from 'react';
import styled from 'styled-components';
import * as variables from '../../../../assets/styles/variables';
import SmallChart from '../../../charts/smallChart';
import Loader from '../../../../assets/reusable/components/loader';


const Wrapper = styled.div`
 display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-template-rows: repeat(1,max-content);
  grid-gap: 2.5rem;
  
  @media(max-width: 600px){
  grid-template-rows: repeat(3, max-content);
  grid-template-columns: 1fr;
  }
   
   margin-bottom: 5rem;
`;

const Cell = styled.div`
  background: ${variables.white};
  grid-column: ${props => props.start}/${props => props.end};
  
  @media(max-width: 600px){
  grid-column: 1/-1;
  }
  padding: 2rem;
`;

const CellHeader = styled.p`
font-size: 1.6rem;
font-weight: 500;

    span{
    color: ${variables.lineChart1};
    }

`;

const CellContent = styled.div`
@media(max-width: 900px){
  display: none;
  }
`;

const WorldWrapperIntro = ({lastDayConfirmed, lastDayDeaths, lastDatRecovered, data}) => {


    return (
        <Wrapper>
            <Cell start={1} end={2}>
                <CellHeader>Potwierdzone przypadki: <span>{lastDayConfirmed}</span></CellHeader>
                <CellContent>
                    {data.length > 0 ? <SmallChart
                        height="10"
                        data={data}
                        dataKey="confirmed"
                        color={variables.primaryBlue}/> : <Loader/>}
                </CellContent>

                {/*fix charts to responsive*/}
            </Cell>
            <Cell start={2} end={3}>
                <CellHeader>Zgony: <span>{lastDayDeaths}</span></CellHeader>
                <CellContent>
                    {data.length > 0 ? <SmallChart
                        height="10"
                        data={data}
                        dataKey="deaths"
                        color={variables.red1}
                    /> : <Loader/>}
                </CellContent>

            </Cell>
            <Cell start={3} end={-1}>
                <CellHeader>Wyleczoni: <span>{lastDatRecovered}</span></CellHeader>
                <CellContent>
                    {data.length > 0 ? <SmallChart
                        height="10"
                        data={data}
                        dataKey="recovered"
                        color={variables.green1}
                    /> : <Loader/>}
                </CellContent>

            </Cell>
        </Wrapper>
    )


};

export default WorldWrapperIntro;
