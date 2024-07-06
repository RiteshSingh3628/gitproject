import React from 'react';
import "../Stylecomponent/Navbar.css";
import {Link} from "react-router-dom";

const Navbar = () => {
    return(
        <div>
            <div className="navbar">
                <div className="leftside">
                    <div className="codegmu">
                        codeGMU
                    </div>
                </div>
                <div className="rightside">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Concact Us</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Navbar;