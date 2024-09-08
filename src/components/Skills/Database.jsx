import React from 'react'
import img from "./Logo/Sql.png"
import Plogo from './Plogo';
function Database(props) {
    return (
        <>
            <div className="container">
                <div className="sub-heading">
                    <h2>{props.head}</h2>
                </div>
                <div className="logoes">


                    <Plogo image={img } heading="Sql" />



                </div>
            </div>
        </>
    )
}

export default Database;
