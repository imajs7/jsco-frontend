import './ContactForm.css';

const ContactForm = () => {
    return ( 
        <div className="container border">

            <h2 className='form-title' id="get-a-quote">Get a Quote</h2>
            
            <form name="contact" action="POST" method="POST">

                <div className="fullName">
                    <input 
                        type="text" 
                        name="firstName" 
                        id="firstName" 
                        placeholder="Enter First Name *" 
                        required
                    />
                    <input 
                        type="text" 
                        name="lastName" 
                        id="lastName" 
                        placeholder="Enter Last Name" 
                    />
                </div>

                <div className="email">
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        placeholder="Enter email address *" 
                        required
                    />
                </div>

                <div className="message">
                    <textarea 
                        name="form-message" 
                        id="form-message" 
                        cols={30} 
                        rows={10} 
                        placeholder="Enter your message *" 
                        required
                    ></textarea>
                </div>

                <div className="buttons">
                    <button type="reset">Reset</button>
                    <button type="submit">Send message</button>
                </div>

            </form>

        </div>
     );
}
 
export default ContactForm;