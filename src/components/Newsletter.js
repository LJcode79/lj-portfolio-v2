import { useState, useEffect } from "react";
import { Col, Row, Alert } from "react-bootstrap";

export const Newsletter = ({ status, message, onValidated }) => {
  const [email, setEmail] = useState('');

  useEffect(() => {
    if (status === 'success') clearFields();
  }, [status])

  const handleSubmit = (e) => {
    e.preventDefault();
    email &&
    email.indexOf("@") > -1 &&
    onValidated({
      EMAIL: email
    })
  }

  const clearFields = () => {
    setEmail('');
  }

    return (
    <Col leg={12}>
        <div className="newsletter-bx">
            <Row>
                <Col lg={12} md={6} xl={5}>
                    <h3>Subscribe to my Newsletter</h3>
                    {status === 'sending' && <Alert>Sending...</Alert>}
                    {status === 'error' && <Alert variant="danger">{message}</Alert>}
                    {status === 'success' && <Alert variant="success">{message}</Alert>}
                </Col>
                <Col md={6} xl={7}>
                    <form onSubmit={handleSubmit}>
                    <Row className="align-items-center">
                        <div className="new-email-bx justify-content-center">
                            <input value={email} type="email" onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                        </div>
                    </Row>
                    <Row className="align-items-center">
                        <button type="submit">Submit</button>
                    </Row>
                    </form>
                </Col>
            </Row>
        </div>
    </Col>
  )
}

export default Newsletter