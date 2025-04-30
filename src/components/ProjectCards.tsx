import React from 'react'
import { Col } from 'react-bootstrap';

type Props = {
    title: string;
    description: string;
    imgUrl: string;
    webLink: string | undefined;
    gitLink: string | undefined;
    gitLink2: string | undefined;
    blogLink: string | undefined;
}

const ProjectCards = (props: Props) => {
    const { title, description, imgUrl, webLink, gitLink, gitLink2, blogLink } = props;
    return (
    <Col sm={6} md={4}>
        <div className="proj-imgbx">
            <img src={imgUrl} />
            <div className="proj-txtx">
                <h4>{title}</h4>
                <h5>{description}</h5>
                {webLink &&<><a href = {webLink} target="_blank" rel="noopener noreferrer">Link to Website</a><br/></>}

                {gitLink && <><a href={gitLink} target="_blank" rel="noopener noreferrer">Link to Github</a><br/></>}
                {gitLink2 && <><a href={gitLink2} target="_blank" rel="noopener noreferrer">Supporting Github Link</a><br/></>}
                {blogLink && <a href={blogLink} target="_blank" rel="noopener noreferrer">Link to Blog</a>}
            </div>
        </div>
    </Col>
    )
}

export default ProjectCards