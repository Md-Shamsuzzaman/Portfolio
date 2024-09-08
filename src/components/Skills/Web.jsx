import React from 'react'
import Plogo from './Plogo'
import img1 from "./Logo/HTML.png"
import img2 from "./Logo/CSS.png"
import img3 from "./Logo/React.png"


const images2 = [
    {
      id: 1,
      src2: img1,
      name: "HTML",
      alt: "Img"
    },
    {
      id: 2,
      src2: img2,
      name: "CSS",
      alt: "Img"
    },
    {
      id: 3,
      src2: img3,
      name: "React Js",
      alt: "Img"
    },
    
  ]
function Web(props) {
  return (
    <>
       <div className="container">
      <div className="sub-heading">
              <h2>{props.head}</h2>
            </div>
            <div className="logoes">
              {
                images2.map((imag) => (

                  <Plogo key={imag.id} image={imag.src2} heading={imag.name} />
                ))

              }
            </div>
            </div>
    </>
  )
}

export default Web
