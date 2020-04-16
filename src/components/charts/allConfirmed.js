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
            potwierdzone: parseFloat(el.confirmed)
        })
    })
    return(
        <AllConfirmedWrapper>
            {console.log(confirmed)}

            <ChartHeader>Liczba zachorowań w Polsce w kolejnych dniach</ChartHeader>
                    <ResponsiveContainer width="100%" height={400}>
                        <LineChart data={confirmed} margin={{top: 5, right: 20, bottom: 5, left: 0}}>
                            <Line type="monotone" dataKey="potwierdzone" stroke="#8884d8"/>
                            <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
                            <XAxis dataKey="date"/>
                            <YAxis/>
                            <Tooltip/>
                        </LineChart>
                    </ResponsiveContainer>



        </AllConfirmedWrapper>
    )
};

export default AllConfirmed;
