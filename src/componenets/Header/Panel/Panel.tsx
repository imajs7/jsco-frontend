import React from 'react';
import './Panel.css';

type Props = {
    sponsor: number
}
const Panel = ( { sponsor } : Props ) => {

    return(

        <div className="banner">
            <img src={`//unsplash.it/1100/150`} alt="" />
        </div>

    );

};

export default Panel;