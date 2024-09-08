import React from 'react'
import image from "./3d-casual-life-young-man-surrounded-by-gadgets-writing-notes.png"
import image1 from "./3d-casual-life-young-man-with-laptop-on-chair-1.png"
import Education from './Education'
import Programming from './Skills/Programming'
import Web from './Skills/Web'
import Database from './Skills/Database'
import Content from './content'
// import Skills from './Skills'

function About() {
   const ItalicStyle={
    fontStyle: "italic",
    
   }
   const text={
    fontStyle: "italic",
    textAlign: "right"
   }

   
  return (
    <>
      <div className="container">
        <div className="top1 flex">
          <div className="left1">
            <p id='about'>As a computer science engineering(CSE) student,I have a strong foundation in both theoretical concepts and practical skills related to computing and technology.</p>
          </div>
          <div className="right2">
            <img src={image} alt="" />
          </div>
        </div>

      </div>
      <Education />
      <div className="skill-header">

        <h1>Skills</h1>
      </div>
      <Programming head="Programming Languages" />
      <Web head="Web Development" />
      <Database head="Database" />
      <div className="container">
        <div className="top1 flex">

        <div className="right3">
            <img src={image1} alt="" />
          </div>
          <div className="left1">
            <p id='about'>My passion for coding and continuous learning drives me to explore new technologies and push the boundaries of what's possible in software engineering.</p>
          </div>
          
        </div>

      </div>


      <div className="Crad">
              
              <Content style={ItalicStyle} style2={text} para="“Keep your face always toward the sunshine, and shadows will fall behind you.”" marks="-Walt Whitman" />
             
             
          
              
          </div>

    </>
  )
}

export default About
