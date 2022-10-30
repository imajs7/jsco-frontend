import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowMaximize, faCode, faTerminal } from '@fortawesome/free-solid-svg-icons'; 
import getSiteData from '../../../services/fetchData';
import { siteInfo } from '../../../services/LocalData';
import useDocumentTitle from '../../../utils/useDocumentTitle';
import './Home.css';
import CallToAction from '../../commons/CallToAction/CallToAction';
import TechStack from '../../commons/TechStack/TechStack';

const Home = () => {

    const [ bgImage, setBgImage ] = useState<string>('linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.9))');
    const [ ctaImage, setCtaImage ] = useState<string>('');

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
                    setCtaImage( baseUrl + data.ctaImage );
                }
            } catch ( error ) {
                console.log( error as string );
            }
        }
        getData();
    }, []);
    
    return ( 
        <>
            <div className="hero-section" style={{ backgroundImage: bgImage }}>
                <div className="container">
                    <div className="site-info">
                        <h1>JS Codes & Machine Learning</h1>
                        <h5>{siteInfo.tagLine}</h5>
                    </div>
                    <p>
                        {siteInfo.shortIntro}
                    </p>
                    <CallToAction />
                </div>
            </div>
            <div className="our-usp container">
                <div className="card">
                    <div className="usp--icon">
                        <FontAwesomeIcon icon={faWindowMaximize} className='fontawesome' />
                    </div>
                    <div className="usp--text">
                        <h4 className="usp--text--title">{siteInfo.usp.item1.title}</h4>
                        <p>{siteInfo.usp.item1.content}</p>
                    </div>
                </div>
                <div className="card">
                    <div className="usp--icon">
                        <FontAwesomeIcon icon={faCode} className='fontawesome' />
                    </div>
                    <div className="usp--text">
                        <h4 className="usp--text--title">{siteInfo.usp.item2.title}</h4>
                        <p>{siteInfo.usp.item2.content}</p>
                    </div>
                </div>
                <div className="card">
                    <div className="usp--icon">
                        <FontAwesomeIcon icon={faTerminal} className='fontawesome' />
                    </div>
                    <div className="usp--text">
                        <h4 className="usp--text--title">{siteInfo.usp.item3.title}</h4>
                        <p>{siteInfo.usp.item3.content}</p>
                    </div>
                </div>
            </div>
            <div className="second-cta container">
                <div className="second-cta--image">
                    <img src={ctaImage} alt="place order" />
                </div>
                <div className="second-cta--action">
                    <h2>{siteInfo.objective.title}</h2>
                    <p>{siteInfo.objective.content}</p>
                    <CallToAction/>
                </div>
            </div>
            <div className="tech-stack container">
                <h2 className='tech-stack--title'>{siteInfo.techStack.title}</h2>
                <p className='tech-stack--para'>{siteInfo.techStack.content}</p>
                <div className="tech-stack--logos">
                    <TechStack/>
                </div>
            </div>
        </>
     );
}
 
export default Home;