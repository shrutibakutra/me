import React, { useEffect } from 'react';
import { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse,
} from 'reactstrap';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const adjustScroll = () => {
    const sections = ['about', 'skills', 'portfolio', 'contact'];
  
    sections.forEach(id => {
      const element = document.getElementById(id);
      if (element) {
        element.style.scrollMarginTop = '70px'; // Adjust this value based on your navbar height
      }
    });
  };
  
  useEffect(() => {
    adjustScroll();
  }, []);



  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">SHRUTI BAKUTRA</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
        <NavItem>
            <NavLink href="#about">About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#skills">Skills</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#portfolio">Portfolio</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#contact">Contact</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
