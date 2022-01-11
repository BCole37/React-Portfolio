import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
    const [formState, setFormState] = useState({Name: '',Email: '', Message: '', });

    const [error, setError] = useState('');

    const handleInputChange = (event) => {;
        const { name, value } = event.target;
        const emailcheck = new RegExp(/@/);

        setFormState({
            ...formState,
            [name]: value,
        });

        if (!value) {
            return setError(`${name} field cannot be empty`);
        } else {
            setError('');
        }

        if (name === 'Email' && !emailcheck.test(formState.Email)) {
            setError('Please enter a valid email address.');
        } else {
            setError('');
        }
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
    };

    return (
        <div className="contact-form">
            <form className="form">
                <input
                    value={formState.Name}
                    name="Name"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Name"
                />
                <input
                    value={formState.Email}
                    name="Email"
                    onChange={handleInputChange}
                    type="email"
                    placeholder="Email"
                />
                <textarea
                    value={formState.Message}
                    name="Message"
                    onChange={handleInputChange}
                    type="text"
                    placeholder="Message"
                />
                <button type="button" onClick={handleFormSubmit}>
                    Submit
                </button>
            </form>
            {error && <span>{error}</span>}
        </div>
    )
}

export default Contact