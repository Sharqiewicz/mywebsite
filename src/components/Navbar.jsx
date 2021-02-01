import React from 'react'
import Github from '../images/github 2.svg';
import Instagram from '../images/instagram 3.svg';
import Linkedin from '../images/linkedin 1.svg';
import Youtube from '../images/youtube 2.svg';

export default function Navbar() {
    return (
        <div className="navbar__container">
            <div className="navbar__menu">
                <div className="navbar__group">
                    <div className="navbar__dash dash--red"></div>
                    <div className="navbar__dash dash--yellow"></div>
                    <div className="navbar__dash dash--green"></div>
                </div>
            </div>
            <div className="navbar__socials">
                <a className="social__link" target="_blank" href="https://www.instagram.com/sharqiewicz/"><Instagram/></a>
                <a className="social__link" target="_blank" href="https://github.com/Sharqiewicz"><Github/></a>
                <a className="social__link" target="_blank" href="https://www.linkedin.com/in/kacperszarkiewicz/"><Linkedin/></a>
                <a className="social__link" target="_blank" href="https://www.youtube.com/channel/UCLJiABSd-uulY0TNv1wLJaA"><Youtube/></a>
            </div>
        </div>
    )
}
