import React from 'react'
import {useState} from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import contactImg from "../assets/img/contact-img.svg"

type Props = {}

const Contact = (props: Props) => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: '',

    }

    interface Status {
        success?: boolean;
        message: string;
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);
    const [buttonText, setButtonText] = useState('Send');
    const [status, setStatus] = useState<Status>({success: false, message: '' });

    const onFormUpdate = (category: string, value: string) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setButtonText('Sending...');
        let response = await fetch("https://portfolio-backend3-pi.vercel.app/contact", {
        // let response = await fetch("http://localhost:5000/contact/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formDetails),
        });

        setButtonText("Send");
        let result = await response.json();
        setFormDetails(formInitialDetails);
        if (result.code == 200) {
            setStatus({success: true, message: 'Message sent successfully'})
        }
        else {
            setStatus({ success: false, message: 'something went wrong try again later'})
        }
    }

    return (
        <section className="contact" id="connect">
            {/* <h1>Contact information</h1>
            <h3>lawrencejohnbalanza@gmail.com</h3> */}
            <Container>
                <Row className="align-items-center">
                    <Col md={6}>
                        <img src={contactImg} alt="Contact Me"/>
                    </Col>
                    <Col md={6}>
                        <h2>Let's connect!</h2>
                        <form onSubmit={handleSubmit}>
                            <Row>
                                <Col sm={6} className="px-1">
                                    <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)}/>
                                </Col>

                                <Col sm={6} className="px-1">
                                <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                                </Col>

                                <Col sm={6} className="px-1">
                                    <input type="email" value={formDetails.email} placeholder="Email" onChange={(e) => onFormUpdate('email', e.target.value)}/>
                                </Col>

                                <Col sm={6} className="px-1">
                                <input type="tel" value={formDetails.phone} placeholder="Phone Number" onChange={(e) => onFormUpdate('phone', e.target.value)}/>
                                </Col>
                                <Col>
                                    <textarea rows={6} value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}/>
                                        <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                                {
                                    status.message &&
                                    <Col>
                                    <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                    </Col>
                                }
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact