import React, { useState, useEffect } from 'react';
import {FaBars} from 'react-icons/fa';
import { Nav, NavbarContainer, Logo,
NavLogo, MobileIcon, NavLinks_1,
NavMenu, NavItem, NavLinks, 
NavBtn, NavBtnLink } from './NavbarElements';
import {animateScroll as scroll} from 'react-scroll';
import logo from "../../images/logo.jpeg";

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, [])
    

    const toggleHome = () => {
        scroll.scrollToTop();
    }

  return (
    <>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to="/" onClick={toggleHome}><Logo src={logo}/></NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks_1 to="/" onClick={toggleHome}>Home</NavLinks_1>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="delivery"
                        smooth={true} duration={500} spy={true} exact={true} offset={-80}
                        >Delivery Models</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="services"
                        smooth={true} duration={500} spy={true} exact={true} offset={-80}
                        >How it works</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="solutions"
                        smooth={true} duration={500} spy={true} exact={true} offset={-80}
                        >Solutions</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="signin">Careers</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="footer"
                        smooth={true} duration={500} spy={true} exact={true} offset={-80}
                        >Contact Us</NavLinks>
                    </NavItem>
                </NavMenu>
                {/* <NavBtn> */}
                {/*     <NavBtnLink to="signin">Sign In</NavBtnLink> */}
                {/* </NavBtn> */}
            </NavbarContainer>
        </Nav>
    </>
    );
};

export default Navbar;
