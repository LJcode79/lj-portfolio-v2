import React from 'react'
import NavBar from '../../../components/NavBar'

type Props = {}

const Blackjack = (props: Props) => {
  return (
    <>
        <NavBar/>
        <div className="project">
        <h1>Blackjack</h1>
            <div className="mainText">
                <br/><br/><br/>
                Title: Blackjack <br/><br/> Date: December 15, 2020 <br/><br/> School: Palomar Community College  <br/><br/> Class: Programming Fundementals II (CSCI 114) <br/><br/> Language: Java <br/><br/> IDE: BlueJ <br/><br/> Description: Single player, text-based game of Blackjack. Input the amount of money you want to bet and play against an AI dealer!
                <br/><br/><br/>
                {/* <img src="../images/blackjack/blackjackImage4.png" alt=""> */}
                <h4>Demonstration using Bluej IDE</h4>
            </div>
        </div>
    </>
  )
}

export default Blackjack