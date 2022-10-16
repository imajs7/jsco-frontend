import React, { MouseEvent, useState, useContext } from 'react';
import SiteContext from '../../../models/SiteContext';
import './Noticeboard.css';

const Noticeboard = () => {

    const [showNotice, setShowNotice] = useState<boolean>( true );
    const { notice } = useContext(SiteContext).communication;

    const dismiss = ( event : MouseEvent<HTMLButtonElement> ) => {
        event.preventDefault();
        setShowNotice( false );
    };

    return(

        <>
            {
                showNotice &&
                <div className='noticeboard'>
                    <p>{notice}</p>
                    <button onClick={dismiss}>Dismiss</button>
                </div>
            }
        </>

    );

};

export default Noticeboard;