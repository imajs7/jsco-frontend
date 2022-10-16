import React from 'react';
import Logo from '../../commons/Logo/Logo';
import Mainmenu from '../Mainmenu/Mainmenu';
import './Topbar.css';


const Topbar = () => {

    return(
        <div className='topbar add-padding'>
            <Logo />
            <Mainmenu />
        </div>
    );

};

export default Topbar;