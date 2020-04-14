import React from 'react';
import styled from 'styled-components';
import {
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    ResponsiveContainer,
    Tooltip,
    Cell
} from 'recharts';

const AllConfirmedWrapper = styled.div`

`;

const ChartHeader = styled.h1`
font-weight: 400;
`;

const AllConfirmed = () =>{
    return(
        <AllConfirmedWrapper>
                <ChartHeader>Liczba zachorowań w Polsce w kolejnych dniach</ChartHeader>
                <ResponsiveContainer width="100%" height={400}>
                    <LineChart data={cases} margin={{top: 5, right: 20, bottom: 5, left: 0}}>
                        <Line type="monotone" dataKey="Polska" stroke="#8884d8"/>
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
                        <XAxis dataKey="name"/>
                        <YAxis/>
                        <Tooltip/>
                    </LineChart>
                </ResponsiveContainer>
        </AllConfirmedWrapper>
    )
};

export default AllConfirmed;
