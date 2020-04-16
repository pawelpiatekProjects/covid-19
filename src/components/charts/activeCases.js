import React from 'react';
import styled from 'styled-components';
import {CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis} from "recharts";
import * as variables from "../../assets/styles/variables";

const ActiveCasesWrapper = styled.div`
  background-color: ${variables.white};
  padding: 5rem;
  margin-top: 3rem;
`;

const ChartHeader = styled.h1`
font-weight: 400;
`;

const ActiveCases = ({data}) =>{
    return(
        <ActiveCasesWrapper>
            <ChartHeader>Aktualna liczba chorych</ChartHeader>
            <ResponsiveContainer width="100%" height={400}>
                <LineChart data={data} margin={{top: 5, right: 20, bottom: 5, left: 0}}>
                    <Line type="monotone" dataKey="Chorzy" stroke="#8884d8"/>
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5"/>
                    <XAxis dataKey="date"/>
                    <YAxis/>
                    <Tooltip/>
                </LineChart>
            </ResponsiveContainer>
        </ActiveCasesWrapper>
    )
};

export default ActiveCases;
