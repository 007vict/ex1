import React from 'react';
import { Link } from "react-router-dom";
import logo from './../images/893946_medium2000.png'
import './../css/nicepage.css'
import './../css/Main.css'

function Header(props) {
    return (
        <div>
            <header className="u-clearfix u-header u-palette-4-base u-sticky u-sticky-576f u-header" id="sec-9a0b">
                <div className="u-clearfix u-sheet u-sheet-1">
                    <h2 className="u-hover-feature u-subtitle u-text u-text-default u-text-1">Education</h2>
                    <a href="#" className="u-image u-logo u-image-1" data-image-width="600" data-image-height="600">
                        <img src={logo} className="u-logo-image u-logo-image-1"/>
                    </a>
                    <nav className="u-menu u-menu-dropdown u-offcanvas u-menu-1">
                        <div className="menu-collapse" style={{fontSize: "1rem", letterSpacing: 0}}>
                            <a className="u-button-style u-custom-left-right-menu-spacing u-custom-padding-bottom u-custom-top-bottom-menu-spacing u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base"
                               href="#">
                                <svg className="u-svg-link" viewBox="0 0 24 24">
                                    <use xlinkHref="#menu-hamburger"></use>
                                </svg>
                                <svg className="u-svg-content" version="1.1" id="menu-hamburger" viewBox="0 0 16 16"
                                     x="0px" y="0px"
                                     xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <rect y="1" width="16" height="2"></rect>
                                        <rect y="7" width="16" height="2"></rect>
                                        <rect y="13" width="16" height="2"></rect>
                                    </g>
                                </svg>
                            </a>
                        </div>
                        <div className="u-nav-container">
                            <ul className="u-nav u-unstyled u-nav-1">
                                <li className="u-nav-item"><Link
                                    className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base"
                                    to="/Главная.html" style={{padding: "10px 20px"}}>Главная</Link>
                                </li>
                                <li className="u-nav-item"><Link
                                    className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base"
                                    to="/О-нас.html" style={{padding: "10px 20px"}}>О нас</Link>
                                </li>
                                <li className="u-nav-item"><Link
                                    className="u-button-style u-nav-link u-text-active-palette-1-base u-text-hover-palette-2-base"
                                    to="/Контакты.html" style={{padding: "10px 20px"}}>Контакты</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="u-nav-container-collapse">
                            <div
                                className="u-black u-container-style u-inner-container-layout u-opacity u-opacity-95 u-sidenav">
                                <div className="u-inner-container-layout u-sidenav-overflow">
                                    <div className="u-menu-close"></div>
                                    <ul className="u-align-center u-nav u-popupmenu-items u-unstyled u-nav-2">
                                        <li className="u-nav-item"><Link className="u-button-style u-nav-link"
                                                                      to="./../Главная.html">Главная</Link>
                                        </li>
                                        <li className="u-nav-item"><a className="u-button-style u-nav-link"
                                                                      href="О-нас.html">О нас</a>
                                        </li>
                                        <li className="u-nav-item"><a className="u-button-style u-nav-link"
                                                                      href="Контакты.html">Контакты</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="u-black u-menu-overlay u-opacity u-opacity-70"></div>
                        </div>
                    </nav>
                </div>
            </header>
        </div>
    );
}

export default Header;