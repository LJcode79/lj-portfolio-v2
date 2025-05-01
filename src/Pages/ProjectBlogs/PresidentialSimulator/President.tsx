import React from 'react'
import NavBar from '../../../components/NavBar'
import president1 from "../images/president/president8.png"

type Props = {}

const President = (props: Props) => {
  return (
    <>
        <NavBar/>
        <div className="project">
        <h1>Presidential Election Simulator</h1>
            <div className="mainText">
                <br/><br/><br/>
                Title: Presidential Election Simulator <br/><br/> Date: February 4, 2022  <br/><br/> School: California State University San Marcos <br/><br/> Class: US Government & Politics (PSCI 100) <br/><br/> Language: C++ <br/><br/> IDE: Replit <br/><br/> Description: Text-based board game, choose your actions wisely in this multiplayer journey to become the next President of the United States! <br/><br/>
                <br/><br/><br/>
                <img src={president1} alt=""/>
                <h4>Demonstration using Replit IDE</h4>
            </div>
        </div>
    </>
  )
}

export default President