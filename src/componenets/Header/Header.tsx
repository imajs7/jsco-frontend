import React, { useContext } from 'react';
import Noticeboard from './Noticeboard/Noticeboard';
import Topbar from './Topbar/Topbar';
import Panel from './Panel/Panel';
import SiteContext from '../../models/SiteContext';

const Header = () => {

    
    const showSponsor = useContext(SiteContext).sponsor.show;

    return(

        <>
            <Noticeboard />
            <Topbar />
            { showSponsor > 0 ? (<Panel sponsor={showSponsor} />) : ''}
        </>

    );

};

export default Header;