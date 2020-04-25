import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/img/logo3.png';
import * as variables from '../../assets/styles/variables';
import {Link, Router} from 'react-router-dom';

const TopBarWrapper = styled.div`
padding: 2rem;
width: 100%;
background: ${variables.white};
`;

const Logo = styled.img`
  height: 8rem;
`;

const TopBar = () => {
    return (

            <TopBarWrapper>
                <Link to="/">
                    <Logo src={logo}/>
                </Link>
            </TopBarWrapper>

    )
};

export default TopBar;
