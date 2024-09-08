import React from "react";
import { Link,Outlet } from 'react-router-dom';
import Footer from "./Footer";




function Navbar() {

    return (
        <>

            <nav className="navbar">
                <div className="name">
                    <h1>Shams's Portfolio</h1>
                </div>
                <div className="nav-list">
                    <input type="checkbox" id="check" />
                    <label htmlFor="check" className="checkbtn">
                        <i className="fa-solid fa-bars"></i>
                    </label>
                    <ul>
                        <Link to="/Home" ><li>HOME</li></Link>
                        <Link to="/"><li>ABOUT</li></Link>
                        <Link to="/Mainskill"><li>SKILLS</li></Link> 
                        {/* <Link to="/Project"> <li>PROJECT</li></Link> */}
                    </ul>

                
                </div>
                
            </nav>
            <Outlet/>

        </>
    );

}
export default Navbar;