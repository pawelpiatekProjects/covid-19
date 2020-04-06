import React from 'react';
import styled from 'styled-components';

const ColorSpanWrapper = styled.span`
color: ${props=>props.color};
`;

const ColorSpan = (props) =>(
    <ColorSpanWrapper color={props.color}>{props.children}</ColorSpanWrapper>
);

export default ColorSpan;

