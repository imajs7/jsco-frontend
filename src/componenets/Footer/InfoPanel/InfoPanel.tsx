import React from 'react';
import './InfoPanel.css';
import Logo from '../../commons/Logo/Logo';
import Social from '../../commons/Social/Social';
import { siteInfo } from '../../../services/LocalData';

const InfoPanel = () => {

    return(

        <div className="info-panel">
            
            <div className="container">

                <Logo />
                <p>
                    {siteInfo.shortIntro}
                </p>
                <Social />

            </div>

        </div>

    );

};

export default InfoPanel;