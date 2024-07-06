import React from 'react';
import "../Stylecomponent/Navbar.css";
import {Link} from "react-router-dom";

const Navbar = () => {
    return(
        <div>
            <nav className="navbar">
                <div className="leftside">
                    <div className="codegmu">
                        codeGMU
                    </div>
                </div>
                <div className="rightside">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/concact">Concact Us</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;