import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/img/logo3.png';
import * as variables from '../../assets/styles/variables';

const TopBarWrapper = styled.div`
padding: 2rem;
width: 100%;
background: ${variables.white};
`;

const Logo = styled.img`
  height: 8rem;
`;

const TopBar = () =>{
    return(
        <TopBarWrapper>
            <Logo src={logo}/>
        </TopBarWrapper>
    )
};

export default TopBar;
