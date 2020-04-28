import React from 'react';
import styled from 'styled-components';
import * as variables from '../../../assets/styles/variables';
import {Link} from "react-router-dom";

const CountryPreviewWrapper = styled.div`
  width: 100%;
  background-color: ${variables.white};
  padding: 2rem;
  margin: .5rem auto;
  
  
  &:hover a{
    color: ${variables.secondaryBlue};
   
    cursor: pointer;
  }
  

`;

const CountryPreviewWrapperHeader = styled.p`
margin: 0;
a{
transition: all .2s;
text-decoration: none;
color: ${variables.textColor};
}
@media(max-width: 600px){
font-size: 1.6rem;
}

@media(max-width: 400px){
font-size: 1.4rem;
}
`;

const CountryPreview = ({name}) =>{
    return(
        <CountryPreviewWrapper>
            <CountryPreviewWrapperHeader>
                {name}
                </CountryPreviewWrapperHeader>
        </CountryPreviewWrapper>
    )
};

export default CountryPreview;
