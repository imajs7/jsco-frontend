import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faAws, faDocker, faJava, faJs, faNodeJs, faPython, faReact } from '@fortawesome/free-brands-svg-icons';

const TechStack = () => {
    return ( 
        <>
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
                <FontAwesomeIcon icon={faAws} className='fontawesome' title='Amazon Web Services' />
            </div>
            <div className="tech-stack-icons">
                <FontAwesomeIcon icon={faDocker} className='fontawesome' title='Docker' />
            </div>
            <div className="tech-stack-icons">
                <FontAwesomeIcon icon={faJs} className='fontawesome' title='Javascript' />
            </div>
        </>
     );
}
 
export default TechStack;