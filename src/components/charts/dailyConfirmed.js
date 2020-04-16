import React from 'react';
import * as variables from '../../assets/styles/variables';
import styled from 'styled-components';

import {
    CartesianGrid,
    XAxis,
    YAxis,
    ResponsiveContainer,
    Tooltip,
    BarChart,
    Bar,

} from 'recharts';

const DailyConfirmedWrapper = styled.div`
background-color: ${variables.white};
padding: 5rem;
margin-top: 3rem;
`;

const ChartHeader = styled.h1`
font-weight: 400;
`;

const DailyConfirmed = ({data}) =>{


    return(
        <DailyConfirmedWrapper>
            <ChartHeader>Dzienna liczba zachorowań w Polsce</ChartHeader>
            <ResponsiveContainer width="100%" height={400}>
                <BarChart  data={data} margin={{top: 5, right: 20, bottom: 5, left: 0}}>
                    <Bar type="monotone" dataKey="Potwierdzone" stroke="#8884d8"/>
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
                    <XAxis dataKey="date"/>
                    <YAxis/>
                    <Tooltip/>
                </BarChart>
            </ResponsiveContainer>
        </DailyConfirmedWrapper>
    )
};

export default DailyConfirmed;
