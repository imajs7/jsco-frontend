import React, { MouseEvent, useEffect, useState } from 'react';
import getSiteData from '../../../services/fetchData';
import './Noticeboard.css';

const Noticeboard = () => {

    const [ notice, setNotice ] = useState<string>('');

    useEffect( () => {
        async function getData() {
            try{
                const data = await getSiteData();
                setNotice( data.notice );
            } catch ( error ) {
                setNotice( error as string );
            }
        }
        getData();
    }, []);

    const dismiss = ( event : MouseEvent<HTMLButtonElement> ) => {
        event.preventDefault();
        setNotice( '' );
    };

    return(

        <>
            {
                ( notice !== '' ) && 
                <div className='noticeboard'>
                    <p>{notice}</p>
                    <button className="btn" onClick={dismiss}>Dismiss</button>
                </div>
            }
        </>

    );

};

export default Noticeboard;