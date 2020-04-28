import React from 'react';
import styled from 'styled-components';
import * as variables from '../../../assets/styles/variables';


const Wrapper = styled.div`

`;

const WorldWrapperHeader = styled.h1`
  font-weight: 400;
  span{
  font-weight: 500;
  color: ${variables.lineChart2};
  }
  
  
`;

const WorldWrapper = ({date, children}) =>{
    return(
        <Wrapper>
            <WorldWrapperHeader>Global numbers, last update: <span>{date}</span></WorldWrapperHeader>
            {children}
        </Wrapper>
    )
};

export default WorldWrapper;
