import React from 'react';
import styled from 'styled-components';
import * as variables from '../../../assets/styles/variables';

const CountryPreviewWrapper = styled.div`
  width: 100%;
  background-color: ${variables.white};
  padding: 2rem;
  margin: .5rem auto;
  transition: all .2s;
  
  &:hover{
    color: ${variables.secondaryBlue};
   
    cursor: pointer;
  }
`;

const CountryPreviewWrapperHeader = styled.p`
margin: 0;
`;

const CountryPreview = ({name}) =>{
    return(
        <CountryPreviewWrapper>
            <CountryPreviewWrapperHeader>{name}</CountryPreviewWrapperHeader>
        </CountryPreviewWrapper>
    )
};

export default CountryPreview;
