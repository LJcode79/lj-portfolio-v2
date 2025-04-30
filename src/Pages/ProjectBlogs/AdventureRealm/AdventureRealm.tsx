import React from 'react'
import NavBar from '../../../components/NavBar'

type Props = {}

const AdventureRealm = (props: Props) => {
  return (
    <>
        <NavBar/>
        <div className="project">
        <h1>Adventure Realm</h1>
            <div className="mainText">
                <br/><br/><br/>
                Title: Adventure Realm <br/><br/> Date: December 14, 2022 <br/><br/> School: California State University San Marcos <br/><br/> Class: Game Programming (CS 485) <br/><br/> Language: C# <br/><br/> IDE: Unity Game Engine <br/><br/> Description: Quest Line based RPG. Start off as a peasant working the farms to becoming the hero of the village!
                <br/><br/>
                {/* <img src="../images/Adventure/adventure1.png" alt=""> */}
                <h4>Adventure Realm's main menu</h4><br/><br/>
                <video width="580" height="326" controls>
                {/* <source src="../images/Adventure/adventureV3.mp4"> */}
                </video>
                <h4>Gameplay Demonstration of Adventure Realm</h4><br/><br/>
                {/* <img src="../images/Adventure/adventure2.png" alt=""> */}
                <h4>Adventure Realm in Unity's editor menu</h4>
            </div>
        </div>
    </>
  )
}

export default AdventureRealm