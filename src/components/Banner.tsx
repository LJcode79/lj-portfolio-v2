import { useState, useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { ArrowRightCircle} from "react-bootstrap-icons"
import headerImg from "../assets/img/header-img.svg"
import 'animate.css'
import TrackVisibility from 'react-on-screen'

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = ["Fullstack Web Developer", "3D Artist", "Fullstack Game Developer", "Coding Tutor"];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(200-Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        setText(updatedText);

        if (isDeleting) {
            setDelta(80)
        }

        if (!isDeleting && updatedText == fullText){
            setIsDeleting(true);
            setDelta(period);
        }
        else if(isDeleting && updatedText === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(50)
        }
    }

    return(
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col>

                    <TrackVisibility>
                    {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                            <span className="tagline">Welcome to my Portfolio</span>
                            <h1>{`Hi I'm LJ `}
                                <br/>
                                <span className="wrap">
                                    {text}
                                </span>
                            </h1>
                            <p>Thanks for visiting my website! I love learning and building things. Check out my projects below!</p>
                            {/* <button onClick={() => window.location.href = '#connect'}>Let's connect <ArrowRightCircle size={25}/></button> */}
                        </div>}
                    </TrackVisibility>

                    </Col>
                </Row>
            </Container>
        </section>
    )
}