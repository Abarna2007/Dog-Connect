import React from 'react';

import { useNavigate } from 'react-router-dom';

 

const Contact = () => {

    const navigate = useNavigate();

 

    const containerStyle = {

        padding: '20px',

        maxWidth: '400px',

        margin: 'auto',

        textAlign: 'center',

    };

 

    const formStyle = {

        display: 'flex',

        flexDirection: 'column',

        gap: '10px',

        marginTop: '20px',

    };

 

    const inputStyle = {

        padding: '10px',

        fontSize: '16px',

        borderRadius: '5px',

        border: '1px solid #ccc',

    };

 

    const buttonStyle = {

        padding: '10px 20px',

        fontSize: '16px',

        borderRadius: '5px',

        border: 'none',

        backgroundColor: 'black',

        color: 'white',

        cursor: 'pointer',

        marginTop: '10px',

    };

 

    return (

        <div style={containerStyle}>

            <h2>Contact Us</h2>

            <p>Any quesries from your side,Please free to ask,We are here to help you at anytime</p>

 

            <form style={formStyle}>

                <input type="text" placeholder="Your Name" style={inputStyle} />

<input type="email" placeholder="Your Email" style={inputStyle} />

                <textarea placeholder="Your Message" style={{ ...inputStyle, height: '100px' }}></textarea>

                <button type="submit" style={buttonStyle}>Send Message</button>

            </form>

            <p style={{ marginTop: '20px' }}>Or</p>

            <button onClick={() => navigate("/login")} className="btn btn-primary" style={buttonStyle}>Login</button>

        </div>

    );

}

 

export default Contact;