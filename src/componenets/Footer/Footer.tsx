import React, { useContext } from 'react';
import SiteContext from '../../models/SiteContext';
import './Footer.css';
import InfoPanel from './InfoPanel/InfoPanel';

const Footer = () => {

    const { siteShortTitle } = useContext( SiteContext ).siteInfo;
    const year = new Date();

    return(

        <div className='footer'>

            <InfoPanel />
            
            <div className="copyright">
                <h3>Copyright &copy; {year.getFullYear()} {siteShortTitle}</h3>
            </div>

        </div>

    );

};

export default Footer;