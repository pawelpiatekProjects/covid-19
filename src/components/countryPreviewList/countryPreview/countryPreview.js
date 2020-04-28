import React, {useState} from 'react';
import styled from 'styled-components';
import * as variables from '../../../assets/styles/variables';


const CountryPreviewWrapper = styled.div`
  transition: all .2s;
`;

const CountryPreviewWrapperHeader = styled.p`
 width: 100%;
  background-color: ${variables.white};
  padding: 2rem;
  margin: .5rem auto 0 auto;
  
  &:hover{
  color: ${variables.primaryBlue};
  cursor: pointer;
  }
  
a{

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

const CountryPreviewContent = styled.div`
transition: all .2s;
max-height: ${props=>props.isOpen ? '15rem' : 0};
overflow: hidden;
background: ${variables.white};
width: 100%;
margin: 0 auto;
padding: ${props=>props.isOpen ? '2rem' : 0};
border-bottom: ${props=>props.isOpen ? '2px' : 0} solid ${variables.primaryBlue};
border-left: 2px solid ${variables.primaryBlue};
border-right: 2px solid ${variables.primaryBlue};
`;

const CountryPreviewContentItem = styled.p`


  span{
  color: ${props=>props.color};
  font-weight: 500;
  }
`;

const CountryPreview = ({name, cases }) =>{

    const [isOpen, setIsOpen] = useState(false);
    // console.log(cases)
    const lastDay = cases[cases.length-1]
    console.log(lastDay)
    return(
        <CountryPreviewWrapper>
            <CountryPreviewWrapperHeader onClick={()=> setIsOpen(!isOpen)}>{name}</CountryPreviewWrapperHeader>
            <CountryPreviewContent isOpen={isOpen}>
                <CountryPreviewContentItem color={variables.lineChart1}>Confirmed: <span>{lastDay.confirmed}</span></CountryPreviewContentItem>
                <CountryPreviewContentItem color={variables.red1}>Deaths: <span>{lastDay.deaths}</span></CountryPreviewContentItem>
                <CountryPreviewContentItem color={variables.green1}>Recovered: <span>{lastDay.recovered}</span></CountryPreviewContentItem>
            </CountryPreviewContent>
        </CountryPreviewWrapper>
    )
};

export default CountryPreview;
