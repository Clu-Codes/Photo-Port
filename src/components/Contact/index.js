import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {
    const [errorMessage, setErrorMessage] = useState('');
    const [ formState, setFormState ] = useState({ name: '', email: '', message: '' });
    const { name, email, message } = formState;

    function handleChange(e) {

        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            if (!isValid) {
                setErrorMessage('Your email is invalid!');
            } else {
                setErrorMessage('')
            } 
            } else {
                if (!e.target.value.length) {
                    setErrorMessage(`${e.target.name} is required.`);
                } else {
                    setErrorMessage('');
                }
        }
        // spread operator is used here to retain the other key-value pairs in this object - we're using '[e.target.name] to dynamically add the name of the input element based on the current one being selected by the user
        if (!errorMessage) {
            setFormState({...formState, [e.target.name]: e.target.value });
        }
    };

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return(
        <section>
            <h1 data-testId='h1tag'>Contact Me</h1>
            <form id='contact-form' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input type='text' name='name' defaultValue={name} onBlur={handleChange}/>
                </div>
                <div>
                    <label htmlFor='email'>Email Address:</label>
                    <input type='email' name='email' defaultValue={email} onBlur={handleChange}/>
                </div>
                <div>
                    <label htmlFor='message'>Message:</label>
                    <textarea type='message' rows='5' defaultValue={message} onBlur={handleChange}/>
                    {/* The statement below is the same as using a conditional that states if the qualification is met, then the div block renders */}
                    {errorMessage && (
                        <div>
                            <p className='errorText'>{errorMessage}</p>
                        </div>
                    )}
                </div>
                <button type='submit'>Submit</button>
            </form>
        </section>
    );
}

export default ContactForm;