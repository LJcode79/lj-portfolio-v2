import React from 'react'
import { Col } from 'react-bootstrap';

type Props = {
    title: string;
    description: string;
    imgUrl: string;
}

const ProjectCards = (props: Props) => {
    const { title, description, imgUrl } = props;
    return (
    <Col sm={6} md={4}>
        <div className="proj-imgbx">
            <img src={imgUrl} />
            <div className="proj-txtx">
                <h4>{title}</h4>
                <a>Link to Website</a>
                <br></br>
                <a>Link to Github</a>
            </div>
        </div>
    </Col>
    )
}

export default ProjectCards