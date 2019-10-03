import React from 'react';
import './Navbar.css';
import Logo from '../../Assets/logo.png'
import { Link } from 'react-router-dom';
import Lock from '../../Assets/lock.png';

const Navbar = () => {

    // const mainNav = document.getElementById('js-navbar-menu');
    // const toggler = document.getElementById('js-navbar-toggle');

    // toggler.addEventListener('click', function () {
    //     mainNav.classList.toggle('navbar__menu--active');
    // })

    return (
        <nav class="navbar">
            <a href="#">
                <img src={Logo} alt="LOGO" class="navbar__logo" />
            </a>
            <span class="navbar__toggle" id="js-navbar-toggle">
                <i class="fas fa-bars"></i>
            </span>
            <ul class="navbar__menu" id="js-navbar-menu">
                <li>
                    <Link to="/">Forside</Link>
                </li>
                <li>
                    <Link to="/dykkerudstyr">Dykkerudstyr</Link>
                </li>
                <li>
                    <Link to="/dykkerrejser">Dykkerrejser</Link>
                </li>
                <li>
                    <Link to="/dykkerkurser">Dykkerkurser</Link>
                </li>
                <li>
                    <Link to="/kontakt">Kontakt</Link>
                </li>
                <li>
                    <Link to="/omos">Om os</Link>
                </li>
            </ul>
            
            
            <div>
            <input type="text" placeholder="Søgefelt" className="søgefelt"/>
            <input type="button" value="SØG" className="søge-knap"/>
            </div>

            <div>
                <Link to="/login" className="lock"><img id="img" src={Lock} alt="Loginknap"/></Link>
                <Link to="/login" className="login">LOGIN</Link>
            </div>

        </nav>

    )
}

export default Navbar
