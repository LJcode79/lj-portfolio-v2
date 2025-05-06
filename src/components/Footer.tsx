import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import logo from "../assets/img/logo.svg"
import portfolioLogo from '../assets/img/portfoliov7.png'
import { MailchimpForm } from './MailchimpForm'
import githubIcon from '../assets/img/githubIcon.png'
import LinkedInIcon from '../assets/img/linkedInIcon.png'


type Props = {}

const Footer = (props: Props) => {

  return (
    <Container fluid className = 'footer'>
        <Row className='justify-content-center'>
          <img src={portfolioLogo} alt="Logo" style={{ width: '25%', height: 'auto' }}/>
        </Row>
        <Row>
          <div className="social-icon">

            <a className = "footer-icon"href="https://www.linkedin.com/in/ljbalanza/"><img src={LinkedInIcon} alt=""/></a>
            <a className = "footer-icon" href="https://github.com/LJcode79"><img src={githubIcon} alt=""/></a>
          </div>
          <p>Copyright 2025. All rights reserved by Lawrence John Balanza</p>
        </Row>
    </Container>
  )
}

export default Footer