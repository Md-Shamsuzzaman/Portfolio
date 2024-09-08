import React from 'react'
import Plogo from './Plogo'
import img1 from "./Logo/C.png"
import img2 from "./Logo/java.png"
import img3 from "./Logo/javascript-.png"
import img4 from "./Logo/python.png"
const images = [
  {
    id: 1,
    src: img1,
    name: "C",
    alt: "Img"
  },
  {
    id: 2,
    src: img2,
    name: "Java",
    alt: "Img"
  },
  {
    id: 3,
    src: img3,
    name: "Javascript",
    alt: "Img"
  },
  {
    id: 4,
    src: img4,
    name: "Python",
    alt: "Img"
  }
]

function Programming(props) {
  return (
    <>
      <div className="container">
        <div className="skill">
          <div className="skillpic">
           
            <div className="sub-heading">
              <h2>{props.head}</h2>
            </div>
            <div className="logoes">
              {
                images.map((imag) => (

                  <Plogo key={imag.id} image={imag.src} heading={imag.name} />
                ))
                
              }
             
            </div>

          </div>


        </div>
      </div>
    </>
  )
}

export default Programming;
