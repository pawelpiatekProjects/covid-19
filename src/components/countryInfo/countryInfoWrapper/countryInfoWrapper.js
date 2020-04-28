import React from 'react';
import styled from 'styled-components';
import AllConfirmed from '../../charts/allConfirmed';
import ActiveCases from '../../charts/activeCases';
import BarChartComponent from '../../charts/BarChartComponent';
import * as variables from '../../../assets/styles/variables';

const Wrapper = styled.div`

`;

const CountryInfoWrapper = ({name, data}) =>{
    return(
        <Wrapper>
            <AllConfirmed
            countryName={name}
            data={data}
            dataKey1="confirmed"
            dataKey2="deaths"
            color2={variables.lineChart1}
            color1={variables.red1}/>

           <BarChartComponent
           data={data}
           header="Total deaths"
           barColor={variables.red1}
           dataKey="deaths"
           />
        </Wrapper>
    )
}

export default CountryInfoWrapper;

