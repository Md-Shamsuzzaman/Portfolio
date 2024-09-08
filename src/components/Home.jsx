import image from "./3d-casual-life-boy-with-laptop-sitting-on-floor.png"

import React from 'react'

function Home() {
  return (
    <>
      <div className="container">
        <div className="top1 flex">
          <div className="left1">
            <h1>Hi, I'm MOHAMMAD SHAMSUZZAMAN</h1>
            <div className="outer-headings">
              <h1 id="ani">
                I AM A
                <div className="inner-headings">
                  <span>

                    Front-End Developer <br />
                    Programmer <br />
                    Coder<br />
                    Software Developer<br />
                  </span>
                </div>
              </h1>
            </div>
            <div className="bottom-top">

              <h5>I AM A COMPUTER SCIENCE STUDENT</h5>
              <button id="btn"><a href="shams.pdf" download>Download Cv</a></button>
            </div>

          </div>
          <div className="right1">
            <img src={image} alt="" />
          </div>
        </div>
        <div className="wrapper-container">
          <div className="wrapper">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="shadow"></div>
            <div className="shadow"></div>
            <div className="shadow"></div>
          </div>
        </div>


      </div>

    </>


  )
}

export default Home
