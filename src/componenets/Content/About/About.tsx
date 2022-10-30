import React from 'react';
import useDocumentTitle from '../../../utils/useDocumentTitle';
import { siteInfo } from '../../../services/LocalData';
import './About.css';

const About = () => {

    useDocumentTitle( 'JS Codes & Machine Learning | About');

    return ( 
        <>
            <div className="about container">
                <h2>{siteInfo.aboutPage.title}</h2>
                <p>{siteInfo.tagLine}</p>
                <p>{siteInfo.aboutPage.content}</p>
                <p>{siteInfo.shortIntro}</p>
                <h2>{siteInfo.objective.title}</h2>
                <p>{siteInfo.objective.content}</p>
                <h2>{siteInfo.techStack.title}</h2>
                <p>{siteInfo.techStack.content}</p>
                <h2>{siteInfo.usp.item1.title}</h2>
                <p>{siteInfo.usp.item1.content}</p>
                <h2>{siteInfo.usp.item2.title}</h2>
                <p>{siteInfo.usp.item2.content}</p>
                <h2>{siteInfo.usp.item3.title}</h2>
                <p>{siteInfo.usp.item3.content}</p>
            </div>
        </>
     );
}
 
export default About;