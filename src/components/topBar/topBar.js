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

const Nav = styled.nav`

`;

const Navigation = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const NavigationItem = styled.li`
  &:nth-child(2){
    margin-left: 5rem;
  }
  a{
  font-size: 2rem;
    text-decoration: none;
    color: ${variables.textColor};
    transition: all .2s;
    
    &:hover{
      color: ${variables.primaryBlue};
    }
  }
`;

const TopBar = () => {
    return (

        <TopBarWrapper>
            <Nav>
                <Navigation>
                    <NavigationItem>
                        <Link to="/">
                            <Logo src={logo}/>
                        </Link>
                    </NavigationItem>
                    <NavigationItem>
                        <Link to="/mainCountry">Countries </Link>
                    </NavigationItem>
                </Navigation>
            </Nav>

        </TopBarWrapper>

    )
};

export default TopBar;
