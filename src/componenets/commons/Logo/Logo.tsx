import React, { useContext }  from 'react';
import SiteContext from '../../../models/SiteContext';
import './Logo.css';

type Props = {
    textLogo: boolean
};

const Logo = ( { textLogo } : Props ) => {

    const { image, text } = useContext(SiteContext).siteLogo;

    return(

        <a href="/">
            <div className="logo">
                {
                    textLogo ? (
                        <span>{text}</span>
                    ) : (
                        <img src={image.dark} alt="" />
                    ) 
                }
            </div>
        </a>

    );

};

Logo.defaultProps = {
    textLogo: true
}

export default Logo;