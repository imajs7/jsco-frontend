import React  from 'react';
import { Link } from 'react-router-dom';
import './Logo.css';

const Logo = () => {

    return(

        <Link to="/">
            <div className="logo">
                <span>JSCo.</span>
            </div>
        </Link>

    );

};

export default Logo;