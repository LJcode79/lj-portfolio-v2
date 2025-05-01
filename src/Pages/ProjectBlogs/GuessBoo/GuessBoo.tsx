import React from 'react'
import '../GameProject.css';
import NavBar from '../../../components/NavBar';
import boo1 from "../images/guessBoo/boo1.png"
import boo2 from "../images/guessBoo/boo4.mp4"
import boo3 from "../images/guessBoo/gifs/ghostHunt1.gif"
import boo4 from "../images/guessBoo/gifs/ghostHunt2.gif"
import boo5 from "../images/guessBoo/gifs/openDoor.gif"
import boo6 from "../images/guessBoo/gifs/roam.gif";
import boo7 from "../images/guessBoo/gifs/throwablegif.gif";


type Props = {}

const GuessBoo = (props: Props) => {
  return (
    <>
    <NavBar/>
    <div className="project">
        <h1>Guess Boo<br/><span id="award">1st place at 2023 CSUSM CSIS Project Showcase</span></h1>
            <div className="Guessboo">
                <span className="gbHeader">
                Title: Guess Boo <br/><br/> Date: May 17, 2023 <br/><br/> Class: Virtual Reality (CS 486) <br/><br/> Language: C# <br/><br/> IDE: Unity Game Engine <br/><br/> Description: You are a paranormal journalist attempting to find out who exactly is haunting the house. Use context clues such as sound and search for unique evidence to identify the ghost. Guess correctly and avoid being hunted to safely escape the house. Beware of guessing the wrong ghost!
                </span>
                <br/><br/><br/>
                <img src={boo1} alt=""/>
                <h4>Child ghost roaming the living room</h4><br/><br/>
                <video width="580" height="326" controls>
                <source src={boo2}/>
                </video>
                <h4>Guess Boo gameplay Demonstration</h4><br/><br/>
                <img src={boo3} alt=""/>
                <h4>Ghost chasing during a hunt</h4><br/><br/>
                <img src={boo4} alt=""/>
                <h4>Ghost tracking mechanic demonstrations</h4><br/><br/>
                <img src={boo5} alt=""/>
                <h4>Opening doors with VR hands</h4><br/><br/>
                <img src={boo6} alt=""/>
                <h4>Child ghost navigating up the stairs</h4><br/><br/>
                <img src={boo7} alt=""/>
                <h4>Throwable / breakable items</h4><br/><br/>
            </div>
        </div>
    </>
  )
}

export default GuessBoo