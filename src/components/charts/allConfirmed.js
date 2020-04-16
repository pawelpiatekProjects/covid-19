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

const AllConfirmedWrapper = styled.div`
  background-color: ${variables.white};
  padding: 5rem;
  margin-top: 3rem;
`;

const ChartHeader = styled.h1`
font-weight: 400;
`;

const AllConfirmed = ({data}) =>{
    const confirmed = [];
    data.map(el=>{
        confirmed.push({
            date: el.date,
            potwierdzone: parseFloat(el.confirmed),
            śmiertelne: el.deaths
        })
    })
    return(
        <AllConfirmedWrapper>


            <ChartHeader>Liczba zachorowań w Polsce w kolejnych dniach</ChartHeader>
                    <ResponsiveContainer width="100%" height={400}>
                        <ComposedChart data={confirmed} margin={{top: 5, right: 20, bottom: 5, left: 0}}>
                            <Line type="monotone" dataKey="potwierdzone" stroke="#8884d8"/>
                            <Bar dataKey="śmiertelne" barSize={20} fill="#413ea0" />
                            <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
                            <XAxis dataKey="date"/>
                            <YAxis/>
                            <Tooltip/>
                        </ComposedChart>
                    </ResponsiveContainer>



        </AllConfirmedWrapper>
    )
};

export default AllConfirmed;
