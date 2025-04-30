import React from 'react'
import { Navbar } from 'react-bootstrap'
import NavBar from '../../../components/NavBar'

type Props = {}

const TurtleRange = (props: Props) => {
  return (
    <>
        <NavBar/>
        <div className="project">
            <div className="mainText">
                <h1>Turtle Range</h1>
                <br/><br/><br/>

                Title: Turtle Range <br/><br/> Date: March 17, 2023 <br/><br/> School: California State University San Marcos <br/><br/> Class: Virtual Reality (CS 486) <br/><br/> Language: C# <br/><br/> IDE: Unity Game Engine <br/><br/> Description: Take out as many turtles as you can with a bow, but don't let them cross the line!
                <br/><br/>
                {/* <img src="../images/TurtleRange/turtle1.png" alt=""> */}
                <h4>The Turtle Range</h4><br/><br/>
                <video controls>
                {/* <source src="../images/TurtleRange/Turtle3.mp4"> */}
                </video>
                <h4>Video demonstration of The Turtle Range</h4>
            </div>
        </div>
    </>
  )
}

export default TurtleRange