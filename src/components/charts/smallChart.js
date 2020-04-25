import React from 'react';
import styled from 'styled-components';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer} from "recharts";

const SmallChartWrapper = styled.div`

`;


const SmallChart = ({data, color, dataKey}) => {
    return (
        <SmallChartWrapper>
            <ResponsiveContainer>
                <LineChart width={300} height={100} data={data}>
                    <Line type="monotone" dataKey={dataKey} stroke={color} strokeWidth={2}/>
                </LineChart>
            </ResponsiveContainer>
        </SmallChartWrapper>
    )
};

export default SmallChart;
