import React from 'react';
import styled from 'styled-components';
import * as variables from '../../assets/styles/variables';
import {
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    ResponsiveContainer,
    Tooltip,
    ComposedChart,
} from 'recharts';

const Wrapper = styled.div`
 background-color: ${variables.white};
  padding: 5rem;
  margin-top: 3rem;
  
  @media(max-width: 800px){
  padding: 2rem;
  }
  
  @media(max-width: 500px){
  padding: 1rem;
  }
`;

const ChartWrapper = styled.div`
width: 100%;
height: 40rem;
@media(max-width: 1100px){
height: 20rem;
}
@media(max-width: 1000px){
height: 40rem;
}

@media(max-width: 900px){
height: 30rem;
}

@media(max-width: 800px){
height: 20rem;
}

@media(max-width: 550px){
height: 15rem;
}
`;

const ChartHeader = styled.h1`
font-weight: 400;

@media(max-width: 600px){
font-size: 1.6rem;
}
`;

//todo: create separate header component for Chart header

const DeathsAndRecovered = ({data}) => {
    const deathsAndRecoveredArr = [];
    data.map(el => (
        deathsAndRecoveredArr.push({
            date: el.date,
            deaths: el.deaths,
            recovered: el.recovered
        })
    ))
    return (
        <Wrapper>
            <ChartHeader>Deaths and recovered ratio</ChartHeader>
            <ChartWrapper>
                <ResponsiveContainer >
                    <ComposedChart data={deathsAndRecoveredArr} margin={{top: 5, right: 20, bottom: 5, left: 0}}>
                        <Line type="monotone" dataKey="deaths" stroke={variables.red1}/>
                        <Line type="monotone" dataKey="recovered" stroke={variables.green1}/>
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
                        <XAxis dataKey="date"/>
                        <YAxis/>
                        <Tooltip/>
                    </ComposedChart>
                </ResponsiveContainer>
            </ChartWrapper>
        </Wrapper>
    )
};

export default DeathsAndRecovered;
