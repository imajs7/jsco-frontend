import React, { MouseEvent, useState } from 'react';
import './Noticeboard.css';

const Noticeboard = () => {

    const [showNotice, setShowNotice] = useState<boolean>( true );

    const dismiss = ( event : MouseEvent<HTMLButtonElement> ) => {
        event.preventDefault();
        setShowNotice( false );
    };

    return(

        <>
            {
                showNotice &&
                <div className='noticeboard'>
                    <p>{`notice`}</p>
                    <button onClick={dismiss}>Dismiss</button>
                </div>
            }
        </>

    );

};

export default Noticeboard;