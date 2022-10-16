import React, { useContext } from 'react';
import SiteContext from '../../../models/SiteContext';
import './InfoPanel.css';
import Logo from '../../commons/Logo/Logo';
import Social from '../../commons/Social/Social';

const InfoPanel = () => {

    const { shortIntro } = useContext(SiteContext).siteInfo;

    return(

        <div className="info-panel">
            
            <div className="container">

                <Logo />
                <p>
                    {shortIntro}
                </p>
                <Social />

            </div>

        </div>

    );

};

export default InfoPanel;