import React from 'react';
import './Footer.css';
import InfoPanel from './InfoPanel/InfoPanel';

const Footer = () => {

    const year = new Date();

    return(

        <div className='footer'>

            <InfoPanel />
            
            <div className="copyright">
                <h3>Copyright &copy; {year.getFullYear()} {`siteShortTitle`}</h3>
            </div>

        </div>

    );

};

export default Footer;