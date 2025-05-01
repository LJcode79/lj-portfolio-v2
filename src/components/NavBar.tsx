import React from "react";
import {useState, useEffect, useRef} from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from '../assets/img/logo.svg'
import portfolioLogo from '../assets/img/portfoliov7.png'
import githubIcon from '../assets/img/githubIcon.png'
import LinkedInIcon from '../assets/img/linkedInIcon.png'
import { NavLink } from "react-router";
import { useLocation } from 'react-router'; // If you're using React Router
import { useNavigate } from 'react-router';
import '../App.css';
type Props = {};

const NavBar = (props: Props) => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation(); // Get the current location from React Router (if used)
  // const [targetElement, setTargetElement] = useState<HTMLElement | null>(null);
  const navigate = useNavigate();
  const targetElementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value : string) => {
    setActiveLink(value);
    navigate(`#${value}`);
  }

  useEffect(() => {
    // Check for hash on initial load and subsequent route changes
    if (location.hash) {
      const elementId = location.hash.substring(1); // Remove the '#'
      const elementToScroll = document.getElementById(elementId);

      if (elementToScroll) {
        targetElementRef.current = elementToScroll; // Store in ref

        // // Apply scrollMarginTop *before* scrolling
        // if (elementId === 'projects' || elementId === 'skills') {
        //   targetElementRef.current.style.scrollMarginTop = '-600px';
        // } else {
        //   targetElementRef.current.style.scrollMarginTop = ''; // Reset for other sections
        // }

        // Use a slight delay before scrolling.
        setTimeout(() => {
          targetElementRef.current?.scrollIntoView({ behavior: 'smooth' });
        }, 0);
      }
    }
  }, [location, navigate]);


  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
    <Container>
      <Navbar.Brand href="#home">
        <img src={portfolioLogo} alt="LOGO" style={{ width: '100%', height: 'auto' , paddingBottom: '10px', paddingTop: '10px'}} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" >
        <span className="navbar-toggler-icon"></span>
      </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/#home" className ={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick = {() => onUpdateActiveLink('home')}>Home</Nav.Link>
          <Nav.Link href="/#projects" className ={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}onClick = {() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          <Nav.Link href="/#skills" className ={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick = {() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
        </Nav>
        {/* <nav className="me-auto">
          <NavLink to={"/#home"}>Home</NavLink>
        </nav> */}
        <span className="navbar-text">
          <div className="social-icon">
            <a href="https://www.linkedin.com/in/ljbalanza/"><img src={LinkedInIcon} alt=""/></a>
            <a href="https://github.com/LJcode79"><img src={githubIcon} alt=""/></a>
          </div>
          <button className="vvd" onClick={() => window.location.href = '/#connect'}><span>Let's Connect</span></button>
        </span>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default NavBar;
