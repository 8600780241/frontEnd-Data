import React from "react"
import "./Navigation.css"
import { Link } from "react-router-dom"
import Form from "./Form"
import icon from './icon@2x.png';
import camera from './camera@2x.png';

function Nav() {
    return (
        <>
            <header className="head">
                <nav>
                    <Link to="/p"> <p ><img id="icon" src={icon} width="45px" height="45px" /><span id="heading">Instaclone</span></p></Link>
                    <Link to="/f"><img src={camera} id="camera" width="40" height="40px" /></Link>
                </nav>
            </header>
        </>
    )
}

export default Nav