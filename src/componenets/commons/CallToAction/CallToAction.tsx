import React from 'react';
import { Link } from 'react-router-dom';
import './CallToAction.css';

type Props = {
    text1: string,
    action1: string,
    text2: string,
    action2: string,
};

const CallToAction = ( { text1, action1, text2, action2 } : Props ) => {
    return ( 
        <div className="call-to-action">
            <a href={action1} className='btn'>{text1}</a>
            <Link to={action2} className='btn'>{text2}</Link>
        </div>
     );
}

CallToAction.defaultProps = {
    text1: 'Get a quote',
    action1: '#get-a-quote',
    text2: 'About Us',
    action2: '/about',
}
 
export default CallToAction;