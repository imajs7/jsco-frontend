import React from 'react';
import { HashLink as Link} from 'react-router-hash-link';
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
            <Link to={action1} className='btn'>{text1}</Link>
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