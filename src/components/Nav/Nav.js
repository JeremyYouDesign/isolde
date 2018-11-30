import React from "react";
import { Link } from 'react-router-dom';
import './nav.css';

const Nav = () => (
    <div id="header">
        <Link to="/home"><h1 className="center black-text" id="isolde">ISOLDE</h1></Link>
        <nav className="white z-depth-1" role="navigation">
            <div className="nav-wrapper container">
                <ul className="left hide-on-med-and-down">
                    <li><Link to="/trend" className="tab waves-effect waves-light black-text">TREND</Link></li>
                    <li><Link to="/spotlight" className="tab waves-effect waves-light black-text">SPOTLIGHT</Link></li>
                    <li><Link to="/beauty" className="tab waves-effect waves-light black-text">BEAUTY</Link></li>
                    <li><Link to="/topshelf" className="tab waves-effect waves-light black-text">TOP SHELF</Link></li>
                    <li><Link to="/store" className="tab waves-effect waves-light black-text">TRISTAN+ISOLDE</Link></li>
                    <li><Link to="/about" className="tab waves-effect waves-light black-text">ABOUT</Link></li>
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