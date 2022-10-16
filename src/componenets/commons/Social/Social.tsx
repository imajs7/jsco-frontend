import React, { useContext } from 'react';
import './Social.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebook, faTwitter, faGithub, faTelegram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import SiteContext from '../../../models/SiteContext';


const Social = () => {

    const { facebook, twitter, github, telegram, linkedin } = useContext(SiteContext).socialMedia;

    return ( 
        <div className="social">
            <a href={facebook}><FontAwesomeIcon icon={faFacebook} className="icons" /></a>
            <a href={twitter}><FontAwesomeIcon icon={faTwitter} className="icons" /></a>
            <a href={github}><FontAwesomeIcon icon={faGithub} className="icons" /></a>
            <a href={telegram}><FontAwesomeIcon icon={faTelegram} className="icons" /></a>
            <a href={linkedin}><FontAwesomeIcon icon={faLinkedin} className="icons" /></a>
        </div>
     );
}
 
export default Social;