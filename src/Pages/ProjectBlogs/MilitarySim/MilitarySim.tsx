import React from 'react'
import img1 from '../images/milSim/prog1.png'
import img2 from '../images/milSim/prog2.png'
import img3 from '../images/milSim/prog3.png'
import img4 from '../images/milSim/prog4.png'
import img5 from '../images/milSim/prog5.png'
import img6 from '../images/milSim/prog6.png'
import img7 from '../images/milSim/prog7.png'
import img8 from '../images/milSim/prog8.png'
import img9 from '../images/milSim/prog9.png'
import img10 from '../images/milSim/prog10.mp4'
import './MilitarySim.css';
import NavBar from '../../../components/NavBar'
import Video from 'react-native-video'

type Props = {}

const MilitarySim = (props: Props) => {
  return (
    <>
    <NavBar/>
    <div className="milSim">
        <h3>Military Sim Survival Dev Log</h3>
        <br/><br/><br/><br/>

        <div id="prog1">
            <img src={img1} alt=""/>

            <img src={img2} alt=""/>

            <img src={img3} alt=""/>

            <h4>09/01/2023 - Modeled a human face using Blender. </h4>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>

        <div id="prog2">
            <img src={img4} alt=""/>
            <h4>09/04/2023 - Retopology of the face for better performance in Unreal Engine. </h4>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>

        <div id="prog3">
            <img src={img5} alt=""/>

            <img src={img6} alt=""/>

            <h4>09/06/2023 - Created the upper torso of the basemesh. </h4>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>

        <div id="prog4">
            <img src={img7} alt=""/>

            <img src={img8} alt=""/>

            <h4>09/07/2023 - Completed limbs, hands, and lower torso of basemesh. </h4>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>

        <div id="prog5">
            <img src={img9} alt=""/>

            <h4>09/13/2023 - Uploaded basemesh to Unreal Engine. </h4>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>

        <div id="prog6">
            <video width="768" height="432" controls>
                <source src={img10}/>
            </video>
{/*
            <Video source={}/> */}

            <h4>09/18/2023 - Completed basemesh rig for animation, also implementing inverse kinematics. </h4>
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        </div>


    </div>
    </>
  )
}

export default MilitarySim