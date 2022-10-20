import React from 'react';
import Noticeboard from './Noticeboard/Noticeboard';
import Topbar from './Topbar/Topbar';
import Panel from './Panel/Panel';
import { useLocation } from 'react-router-dom';

const Header = () => {

    const location = useLocation().pathname;

    const isHome = () => {
        if( location === '/' || location === '/home' ) {
        return true;
        }
        return false;
    };

    return(

        <>
            <Noticeboard />
            <Topbar />
            {
                isHome() ? '' : <Panel />
            }
        </>

    );

};

export default Header;