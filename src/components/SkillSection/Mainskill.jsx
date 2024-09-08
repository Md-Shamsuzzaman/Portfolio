import Database from "../Skills/Database"
import Programming from "../Skills/Programming"
import Web from "../Skills/Web"
import image from "./3d-casual-life-young-man-with-laptop-making-notes-on-notepad.png"


import React from 'react'

export default function Mainskill() {
    return (
        <>
            <div className="container">
                <div className="top1 flex">
                    <div className="left1">

                        <p id='about'>As a Computer Science and Engineering student,I have developed strong skills in programming,web development,and database management. I am proficient in data structures & algorithms,and have a foundational understanding of machine learning, networking, and cybersecurity principles.</p>

                    </div>
                    <div className="right2">
                        <img src={image} alt="" />
                    </div>
                </div>

            </div>
       
            <div className="skill-header">

                <h1>Skills</h1>
            </div>
            <Programming head="Programming Languages" />
            <Web head="Web Development" />
            <Database head="Database" />
        
    </>
  )
}
