import React from 'react';
import './InfoPanel.css';
import Logo from '../../commons/Logo/Logo';
import Social from '../../commons/Social/Social';

const InfoPanel = () => {

    return(

        <div className="info-panel">
            
            <div className="container">

                <Logo />
                <p>
                    {`shortIntro`}
                </p>
                <Social />

            </div>

        </div>

    );

};

export default InfoPanel;