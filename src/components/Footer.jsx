import React from 'react'
import {Link} from "react-router-dom"
function Footer() {
    return (
        <>
            <footer>
                <div className="footer">
                    <div className="row">
                        <Link to="https://www.facebook.com/shamsarzoo786/"><i className="fa-brands fa-facebook"></i></Link>
                        <Link to="https://www.instagram.com/shamsuzzaman780/"><i className="fa-brands fa-instagram"></i></Link>
                        <Link to="https://www.linkedin.com/in/mohammad-shamsuzzaman/"><i className="fa-brands fa-linkedin"></i></Link>
                    </div>

                    

                    <div className="row">
                        Shams Copyright © 2024 All rights reserved by Shamsuzzaman || Designed By: Shams
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
