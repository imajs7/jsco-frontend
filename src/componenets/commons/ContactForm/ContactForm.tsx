import { ChangeEvent, useState } from 'react';
import './ContactForm.css';

type msgBody = {
    firstName: string,
    lastName: string,
    email: string,
    message: string
}

const ContactForm = () => {

    const [ msgBody, setMsgBody ] = useState<msgBody>({
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    });

    const onChangeHandler = ( { currentTarget } : ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => {
        setMsgBody({
            ...msgBody,
            [currentTarget.name]: currentTarget.value
        });
    };

    const reset = () => {
        setMsgBody({
            firstName: '',
            lastName: '',
            email: '',
            message: ''
        });
    };
    
    return ( 
        <div className="contact-form border">

            <h2 className='form-title' id="get-a-quote">Get a Quote</h2>
            
            <form name="contact" action="POST" method="POST">

                <div className="fullName">
                    <input 
                        type="text" 
                        name="firstName" 
                        id="firstName" 
                        value={msgBody.firstName}
                        placeholder="Enter First Name *" 
                        onChange={onChangeHandler}
                        required
                    />
                    <input 
                        type="text" 
                        name="lastName" 
                        id="lastName" 
                        value={msgBody.lastName}
                        onChange={onChangeHandler}
                        placeholder="Enter Last Name" 
                    />
                </div>

                <div className="email">
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        value={msgBody.email}
                        onChange={onChangeHandler}
                        placeholder="Enter email address *" 
                        required
                    />
                </div>

                <div className="message">
                    <textarea 
                        name="message" 
                        id="message" 
                        cols={30} 
                        rows={10} 
                        value={msgBody.message}
                        onChange={onChangeHandler}
                        placeholder="Enter your message *" 
                        required
                    ></textarea>
                </div>

                <div className="buttons">
                    <button className='btn' type="reset" onClick={reset}>Reset</button>
                    <button className='btn' type="submit">Send message</button>
                </div>

            </form>

        </div>
     );
}
 
export default ContactForm;