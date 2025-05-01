import React from "react";
import NavBar from "../../../components/NavBar";

type Props = {};

const DoorDetector = (props: Props) => {
  return (
    <>
      <NavBar />
      <div className="project">
        <h1>IoT Door Alarm</h1>
        <div className="mainText">
          <br />
          <br />
          <br />
          Title: IoT Door Alarm <br />
          <br /> Date: June 22, 2022 <br />
          <br /> Language: C++ <br />
          <br /> IDE: Arduino IoT <br />
          <br /> Description: An IoT device capable of detecting whether a door
          is opened or closed. Using a buzzer, the device uses a series of beeps
          to notify the user when the status of the door changes.
          <br />
          <br />
          <br />
          {/* <img src="../images/iot/iotPic.png" alt=""> */}
          <h4>Embedded IoT Door Alarm</h4>
          <br />
          <br />
          <video width="580" height="326" controls>
            {/* <source src="../images/iot/vid1.mp4"> */}
          </video>
          <h4>
            Detecting door opening, notice the red dot (closed status) changes{" "}
          </h4>
          <br />
          <br />
          <video width="580" height="326" controls>
            {/* <source src="../images/iot/vid2.mp4"> */}
          </video>
          <h4>
            Checking the current state of door. 2 beeps mean door is closed, 3
            beeps mean door is open
          </h4>
          <br />
          <br />
          <video width="580" height="326" controls>
            {/* <source src="../images/iot/vid3.mp4"> */}
          </video>
          <h4>Change status of the door from open to closed</h4>
          <br />
          <br />
          <video width="580" height="326" controls>
            {/* <source src="../images/iot/vid4.mp4"> */}
          </video>
          <h4>Turning the alarm on / off</h4>
          <br />
          <br />
          <video width="580" height="326" controls>
            {/* <source src="../images/iot/vid5.mp4"> */}
          </video>
          <h4>Testing the buzzer</h4>
          <br />
          <br />
        </div>
      </div>
    </>
  );
};

export default DoorDetector;
