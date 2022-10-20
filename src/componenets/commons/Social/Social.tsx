import React from 'react';
import './Social.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebook, faTwitter, faGithub, faTelegram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { socialMedia } from '../../../services/LocalData';

const Social = () => {

    return ( 
        <div className="social">
            <a href={socialMedia.facebook}><FontAwesomeIcon icon={faFacebook} className="icons" /></a>
            <a href={socialMedia.twitter}><FontAwesomeIcon icon={faTwitter} className="icons" /></a>
            <a href={socialMedia.github}><FontAwesomeIcon icon={faGithub} className="icons" /></a>
            <a href={socialMedia.telegram}><FontAwesomeIcon icon={faTelegram} className="icons" /></a>
            <a href={socialMedia.linkedin}><FontAwesomeIcon icon={faLinkedin} className="icons" /></a>
        </div>
     );
}
 
export default Social;