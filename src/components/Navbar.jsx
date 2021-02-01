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
                <a className="social__link"><Instagram/></a>
                <a className="social__link"><Github/></a>
                <a className="social__link"><Linkedin/></a>
                <a className="social__link"><Youtube/></a>
            </div>
        </div>
    )
}
