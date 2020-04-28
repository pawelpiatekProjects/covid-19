import React from 'react';
import styled from 'styled-components';
import logo from '../../assets/img/logo3.png';
import * as variables from '../../assets/styles/variables';
import {Link, Router} from 'react-router-dom';

const TopBarWrapper = styled.div`
padding: 2rem;
width: 100%;
background: ${variables.white};
margin-bottom: 5rem;

@media(max-width: 500px){
padding: .5rem;
}
`;

const Logo = styled.img`
  height: 8rem;
  
  @media(max-width: 500px){
  height: 4rem;
  }
`;

const Nav = styled.nav`

`;

const Navigation = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

const Links = styled.div`

`;

const NavigationItem = styled.li`
 display: inline-block;
 margin: 0 3rem;
  a{
  font-size: 2rem;
    text-decoration: none;
    color: ${variables.textColor};
    transition: all .2s;
    
    @media(max-width: 500px){
    font-size: 1.4rem;
   
    }
    
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
                    <Links>
                        <NavigationItem>
                            <Link to="/mainCountry">Countries </Link>
                        </NavigationItem>
                        <NavigationItem><a href="https://github.com/pomber/covid19">Data</a></NavigationItem>
                    </Links>
                </Navigation>
            </Nav>

        </TopBarWrapper>

    )
};

export default TopBar;
