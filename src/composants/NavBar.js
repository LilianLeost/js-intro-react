import React from 'react';
import ico from '../assets/images/dafticon.png'
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <img src={ico} height="50px"/>
            <NavLink className="navbar-brand" to="/">Around the world !</NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01"
                    aria-controls="navbarColor01" aria-expanded="true" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="navbar-collapse collapse show" id="navbarColor01">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/pays">Pays</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/contact">Contact</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about">About</NavLink>
                    </li>
                </ul>

                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <a className="nav-link mr-2" href="#top">Inscription</a>
                    </li>
                    <li className="nav-item">
                        <a className="btn btn-secondary mr-2" href="#top">Connexion</a>
                    </li>
                    <li className="nav-item">
                    <a className="btn btn-info" href="#top">Déconnexion</a>
                </li>

                </ul>
            </div>
        </nav>
    )

}

export default NavBar;