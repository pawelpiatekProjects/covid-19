import React from 'react';
import styled from 'styled-components';


const Wrapper = styled.div`

`;

const WorldWrapperHeader = styled.h1`
  font-weight: 500;
`;

const WorldWrapper = ({date, children}) =>{
    console.log(date)
    return(
        <Wrapper>
            <WorldWrapperHeader>Statystyki z dnia: {date}</WorldWrapperHeader>
            {children}
        </Wrapper>
    )
};

export default WorldWrapper;
