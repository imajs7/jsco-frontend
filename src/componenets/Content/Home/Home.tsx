import React, { useEffect, useState } from 'react';
import getSiteData from '../../../services/fetchData';
import { siteInfo } from '../../../services/LocalData';
import useDocumentTitle from '../../../utils/useDocumentTitle';
import './Home.css';

const Home = () => {

    const [ bgImage, setBgImage ] = useState<string>('linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9))');
    const baseUrl = process.env.REACT_APP_BASE_URL;

    useDocumentTitle( 'JS Codes & Machine Learning' );

    useEffect( () => {
        async function getData() {
            try{
                const data = await getSiteData();
                if( data.bgImage !== undefined ) {
                    setBgImage( prevState => {
                        return prevState + ', url("' + baseUrl + data.bgImage + '")';
                    } );
                }
            } catch ( error ) {
                console.log( error as string );
            }
        }
        getData();
    }, []);
    
    return ( 
        <>
            <div className="hero-section add-padding" style={{ backgroundImage: bgImage }}>
                <div className="site-info">
                    <h1>JS Codes & Machine Learning</h1>
                    <h5>{siteInfo.tagLine}</h5>
                </div>
                <p>
                    {siteInfo.shortIntro}
                </p>
                <div className="call-to-action">
                    <a href="#get-a-quote" className='btn'>Get a quote</a>
                    <a href="#abcd" className='btn'>About Us</a>
                </div>
            </div>
            <h2>Content area comin from home page</h2>
        </>
     );
}
 
export default Home;