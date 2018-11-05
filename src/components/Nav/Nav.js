import React from "react";
import { Link } from 'react-router-dom';
import './nav.css';

const Nav = () => (
    <div id="header">
        <Link to="/home"><h1 className="center black-text" id="isolde">ISOLDE</h1></Link>
        <nav className="white z-depth-1" role="navigation">
            <div className="nav-wrapper container">
                <ul className="left hide-on-med-and-down">
                    <li><a className="tab waves-effect waves-light black-text">TREND</a></li>
                    <li><a className="tab waves-effect waves-light black-text">SPOTLIGHT</a></li>
                    <li><a className="tab waves-effect waves-light black-text">BEAUTY</a></li>
                    <li><a className="tab waves-effect waves-light black-text">TOP SHELF</a></li>
                    <li><a className="tab waves-effect waves-light black-text">TRISTAN+ISOLDE</a></li>
                    <li><Link className="tab waves-effect waves-light black-text" to="/about">ABOUT</Link></li>
                </ul>
                {/* <ul id="nav-mobile" class="sidenav">
                    <li><a href="#">Navbar Link</a></li>
                </ul>
                <a href="#" data-target="nav-mobile" class="sidenav-trigger"><i class="material-icons">menu</i></a> */}
            </div>
        </nav>
    </div>
    );

export default Nav;