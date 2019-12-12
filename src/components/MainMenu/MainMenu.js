import React from "react";
import "./MainMenu.css"
import { BrowserRouter as Router, Link } from "react-router-dom";

const MainMenu = () => {
    return (
        <nav className="navbar navbar-fixed-top navbar-light main-nav">
            <div className="container justify-content-center ">
                <ul className="nav navbar-nav ">
                    <li className="nav-item active">
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/About" className="nav-link">About</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/AddContact" className="nav-link">Add Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
};
export default MainMenu