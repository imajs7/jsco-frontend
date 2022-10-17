import React from 'react';
import Noticeboard from './Noticeboard/Noticeboard';
import Topbar from './Topbar/Topbar';
import Panel from './Panel/Panel';

const Header = () => {

    return(

        <>
            <Noticeboard />
            <Topbar />
            { 1 > 0 ? (<Panel sponsor={1} />) : ''}
        </>

    );

};

export default Header;