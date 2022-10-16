import React, { useContext } from 'react';
import SiteContext from '../../../models/SiteContext';
import './Panel.css';

type Props = {
    sponsor: number
}
const Panel = ( { sponsor } : Props ) => {

    const toShow = useContext(SiteContext).sponsor.sponsors[sponsor];

    return(

        <div className="banner">
            <img src={toShow.banner} alt="" />
        </div>

    );

};

export default Panel;