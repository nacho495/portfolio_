import React from 'react';
import './Footer.css'
import {FaFacebook, FaTwitter} from "react-icons/fa";
import {FiInstagram} from "react-icons/fi";

const Footer = () => {
    return (
        <footer>
            <a href={"#"} className={"footer__logo"}>Nacho Ortiz</a>
            <ul className={"permalinks"}>
                <li><a href={"#"}>Home</a></li>
                <li><a href={"#about"}>About</a></li>
                <li><a href={"#experience"}>Experience</a></li>
                <li><a href={"#services"}>Services</a></li>
                <li><a href={"#portfolio"}>Portfolio</a></li>
                <li><a href={"#contact"}>Contact</a></li>
            </ul>

            <div className={"footer__socials"}>
                <a href={"https://facebook.com"} target={"_blank"}><FaFacebook /></a>
                <a href={"https://instagram.com"} target={"_blank"}><FiInstagram /></a>
                <a href={"https://twitter.com"} target={"_blank"}><FaTwitter /></a>
            </div>

          
        </footer>
    )
}

export default Footer