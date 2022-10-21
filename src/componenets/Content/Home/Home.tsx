import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowMaximize, faCode, faTerminal } from '@fortawesome/free-solid-svg-icons'; 
import { faAngular, faAws, faCss3, faDocker, faHtml5, faJava, faJenkins, faJs, faLaravel, faLinux, faNodeJs, faPhp, faPython, faReact, faSass, faWordpress } from '@fortawesome/free-brands-svg-icons';
import getSiteData from '../../../services/fetchData';
import { siteInfo } from '../../../services/LocalData';
import useDocumentTitle from '../../../utils/useDocumentTitle';
import './Home.css';

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
            <div className="our-usp container">
                <div className="card">
                    <div className="usp--icon">
                        <FontAwesomeIcon icon={faWindowMaximize} className='fontawesome' />
                    </div>
                    <div className="usp--text">
                        <h4 className="usp--text--title">Frontend Development</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat consectetur praesentium commodi omnis perferendis aut!</p>
                    </div>
                </div>
                <div className="card">
                    <div className="usp--icon">
                        <FontAwesomeIcon icon={faCode} className='fontawesome' />
                    </div>
                    <div className="usp--text">
                        <h4 className="usp--text--title">Backend Development</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat consectetur praesentium commodi omnis perferendis aut!</p>
                    </div>
                </div>
                <div className="card">
                    <div className="usp--icon">
                        <FontAwesomeIcon icon={faTerminal} className='fontawesome' />
                    </div>
                    <div className="usp--text">
                        <h4 className="usp--text--title">Cloud Computing</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat consectetur praesentium commodi omnis perferendis aut!</p>
                    </div>
                </div>
            </div>
            <div className="second-cta container">
                <div className="second-cta--image">
                    <img src={ctaImage} alt="place order" />
                </div>
                <div className="second-cta--action">
                    <h2>How do we help businesses?</h2>
                    <p>We provide complete IT solutions from building microservices to pushing our clients's applications to production servers. Our data analitics team help our client in analysing tends in their business thereby helping them in taking smart decisions.</p>
                    <div className="call-to-action">
                        <a href="#get-a-quote" className='btn'>Get a quote</a>
                        <a href="#abcd" className='btn'>About Us</a>
                </div>
                </div>
            </div>
            <div className="tech-stack container">
                <h2 className='tech-stack--title'>Our Technology Stack</h2>
                <p className='tech-stack--para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quis possimus quidem quasi dignissimos culpa blanditiis architecto nulla, dolor exercitationem quos nemo, quo tempora ipsa, dolorum consequatur vel sequi adipisci!</p>
                <div className="tech-stack--logos">
                    <div className="tech-stack-icons">
                        <FontAwesomeIcon icon={faNodeJs} className='fontawesome' title='NodeJs' />
                    </div>
                    <div className="tech-stack-icons">
                        <FontAwesomeIcon icon={faReact} className='fontawesome' title='React' />
                    </div>
                    <div className="tech-stack-icons">
                        <FontAwesomeIcon icon={faAngular} className='fontawesome' title='Angular' />
                    </div>
                    <div className="tech-stack-icons">
                        <FontAwesomeIcon icon={faJava} className='fontawesome' title='Java' />
                    </div>
                    <div className="tech-stack-icons">
                        <FontAwesomeIcon icon={faPython} className='fontawesome' title='Python' />
                    </div>
                    <div className="tech-stack-icons">
                        <FontAwesomeIcon icon={faLinux} className='fontawesome' title='Linux' />
                    </div>
                    <div className="tech-stack-icons">
                        <FontAwesomeIcon icon={faAws} className='fontawesome' title='Amazon Web Services' />
                    </div>
                    <div className="tech-stack-icons">
                        <FontAwesomeIcon icon={faDocker} className='fontawesome' title='Docker' />
                    </div>
                    <div className="tech-stack-icons">
                        <FontAwesomeIcon icon={faJenkins} className='fontawesome' title='Jenkins' />
                    </div>
                    <div className="tech-stack-icons">
                        <FontAwesomeIcon icon={faHtml5} className='fontawesome' title='HTML%' />
                    </div>
                    <div className="tech-stack-icons">
                        <FontAwesomeIcon icon={faCss3} className='fontawesome' title='Css3' />
                    </div>
                    <div className="tech-stack-icons">
                        <FontAwesomeIcon icon={faSass} className='fontawesome' title='Sass' />
                    </div>
                    <div className="tech-stack-icons">
                        <FontAwesomeIcon icon={faJs} className='fontawesome' title='Javascript' />
                    </div>
                    <div className="tech-stack-icons">
                        <FontAwesomeIcon icon={faPhp} className='fontawesome' title='Php' />
                    </div>
                    <div className="tech-stack-icons">
                        <FontAwesomeIcon icon={faLaravel} className='fontawesome' title='Laravel' />
                    </div>
                    <div className="tech-stack-icons">
                        <FontAwesomeIcon icon={faWordpress} className='fontawesome' title='WordPress' />
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Home;