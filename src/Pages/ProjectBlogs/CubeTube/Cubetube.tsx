import React from 'react'
import NavBar from '../../../components/NavBar'
import cubeTube1 from "../images/CubeTubeScreenshot.png";

type Props = {}

const Cubetube = (props: Props) => {
  return (
    <>
        <NavBar/>
        <div className="project">
        <h1>Blackjack</h1>
        <h1>Cubetube</h1>
            <br/><br/><br/>
            <div className="mainText">
                <br/><br/> Title: Cubetube <br/><br/> Date: July 25, 2020 <br/><br/> School: N/A (personal project) <br/><br/> Class: N/A <br/><br/> Language: C# <br/><br/> IDE: Unity Game Engine <br/><br/> Description: Cube runner game, avoid blocks to get a higher score! My first game using the Unity Game Engine <br/> <br/>
                <img src={cubeTube1} alt=""/>
                <h4>Cubetube demonstration</h4>
            </div>
        </div>
    </>
  )
}

export default Cubetube