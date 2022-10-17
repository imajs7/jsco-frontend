import React from 'react';
import getSiteInfo from '../../../services/fetchData';
import useDocumentTitle from '../../../utils/useDocumentTitle';
import './Home.css';

const Home = () => {

    useDocumentTitle( `siteTitle` );

    const data = getSiteInfo();
    console.log( data );
    
    return ( 
        <>
            <div className="hero-section add-padding">
                <div className="site-info">
                    <h1>{`siteTitle`}</h1>
                    <h5>{`siteTagline`}</h5>
                </div>
                <p>{`shortIntro`}</p>
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