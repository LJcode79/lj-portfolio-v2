import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import logo from "../assets/img/logo.svg"
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'
import navIcon3 from '../assets/img/nav-icon3.svg'
import { MailchimpForm } from './MailchimpForm'


type Props = {}

const Footer = (props: Props) => {

  return (
    <Container>
        <Row>
          <MailchimpForm/>
        </Row>
        <Row className='justify-content-center'>
          <img src={logo} alt="Logo" style={{ width: '50%', height: 'auto' }}/>
        </Row>
        <Row>
          <div className="social-icon">
            <a href=""><img src={navIcon1} /></a>
            <a href=""><img src={navIcon2} /></a>
            <a href=""><img src={navIcon3} /></a>
          </div>
          <p>Copyright 2025. All Rights Reserved by Lawrence John Balanza</p>
        </Row>
    </Container>
  )
}

export default Footer