import React from 'react'

export default function Plogo(props) {
    return (
        <>
            <div className="logo">
                {/* <div className="ima"> */}
                    <img src={props.image} alt="" />
                    <p>{props.heading}</p>
                {/* </div> */}
               
            </div>
        </>
    )
}
