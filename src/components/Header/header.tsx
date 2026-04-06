import React, { useEffect, useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse,
} from 'reactstrap';
import "./header.scss";

const sections = ['about', 'skills', 'portfolio', 'contact'];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [scrolled, setScrolled] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    sections.forEach(id => {
      const element = document.getElementById(id);
      if (element) element.style.scrollMarginTop = '80px';
    });

    const handleScroll = () => setScrolled(window.scrollY > 10);

    const observers = sections.map(id => {
      const el = document.getElementById(id);
      if (!el) return null;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
        { threshold: 0.3, rootMargin: '-80px 0px 0px 0px' }
      );
      observer.observe(el);
      return observer;
    });

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observers.forEach((obs, i) => {
        const el = document.getElementById(sections[i]);
        if (obs && el) obs.unobserve(el);
      });
    };
  }, []);

  return (
    <Navbar color="light" light expand="md" className={`navbar-sticky${scrolled ? ' scrolled' : ''}`}>
      <NavbarBrand href="/">SHRUTI BAKUTRA</NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar className='navbar-header'>
        <Nav className="ml-auto" navbar>
          {sections.map(id => (
            <NavItem key={id}>
              <NavLink href={`#${id}`} className={activeSection === id ? 'active-link' : ''}>
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </NavLink>
            </NavItem>
          ))}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
