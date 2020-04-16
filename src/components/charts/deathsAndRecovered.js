import React from 'react';
import styled from 'styled-components';
import * as variables from '../../assets/styles/variables';
import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    ResponsiveContainer,
    Tooltip,
    ComposedChart,
    Bar,
    Cell
} from 'recharts';

const Wrapper = styled.div`
 background-color: ${variables.white};
  padding: 5rem;
  margin-top: 3rem;
`;

const ChartHeader = styled.h1`
font-weight: 400;
`;

//todo: create separate header component for Chart header

const DeathsAndRecovered = ({data}) =>{
    const deathsAndRecoveredArr = [];
    data.map(el=>{
        deathsAndRecoveredArr.push({
            date: el.date,
            potwierdzone: parseFloat(el.confirmed),
            zgony: el.deaths,
            wyzdrowienia: el.recovered
        })
    })
    return(
        <Wrapper>
            <ChartHeader>Stosunek zgonów do wyzdrowień</ChartHeader>
            <ResponsiveContainer width="100%" height={400}>
                <ComposedChart data={deathsAndRecoveredArr} margin={{top: 5, right: 20, bottom: 5, left: 0}}>
                    <Line type="monotone" dataKey="zgony" stroke={variables.red1}/>
                    <Line type="monotone" dataKey="wyzdrowienia" stroke={variables.green1}/>
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
                    <XAxis dataKey="date"/>
                    <YAxis/>
                    <Tooltip/>
                </ComposedChart>
            </ResponsiveContainer>
        </Wrapper>
    )
};

export default DeathsAndRecovered;
