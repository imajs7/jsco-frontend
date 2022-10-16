import React from 'react';
import { NavLink } from 'react-router-dom';
import MobileControls from '../MobileControls/MobileControls';
import './Mainmenu.css';

const Mainmenu = () => {

    return(

        <nav>
            <ul className='mainmenu'>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/services">Services</NavLink></li>
            </ul>
            <MobileControls/>
        </nav>

    );

};

export default Mainmenu;