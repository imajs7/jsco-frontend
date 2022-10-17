import React  from 'react';
import './Logo.css';

type Props = {
    textLogo: boolean
};

const Logo = ( { textLogo } : Props ) => {

    return(

        <a href="/">
            <div className="logo">
                {
                    textLogo ? (
                        <span>{`text logo`}</span>
                    ) : (
                        <img src={`img logo`} alt="" />
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