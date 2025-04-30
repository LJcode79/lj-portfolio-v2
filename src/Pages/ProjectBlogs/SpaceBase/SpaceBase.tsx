import React from 'react'
import NavBar from '../../../components/NavBar'

type Props = {}

const SpaceBase = (props: Props) => {
  return (
    <>
        <NavBar/>
        <div className="project">
        <h1 >Space Base Attack</h1>
            <div className="mainText">
                <br/><br/><br/>
                Title: Space Base Attack <br/><br/> Date: October 19, 2022 <br/><br/> School: California State University San Marcos <br/><br/> Class: Game Programming (CS 485) <br/><br/> Language: C# <br/><br/> IDE: Unity Game Engine <br/><br/> Description: The alien army of foxes have stolen your money, get your coins back and eliminate the thieving foxes!
                <br/><br/><br/>
                {/* <img src="../images/Space base Attack/Space2.png" alt=""> */}
                <h4>Fox alien chasing the player</h4><br/><br/>
                <video width="580" height="326" controls>
                {/* <source src="../images/Space base Attack/485MidtermDemomp4.mp4"> */}
                </video>
                <h4>Gameplay demonstration of Space Base Attack</h4>
                <br/>
                </div>
        </div>
    </>
  )
}

export default SpaceBase