import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import './MobileControls.css';

const MobileControls = () => {

    return(

        <button>
            <FontAwesomeIcon icon={faBars} />
        </button>

    );

};

export default MobileControls;