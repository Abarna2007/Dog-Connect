import React from 'react';

 

const Login = () => {

    const containerStyle = {

        padding: '20px',

        maxWidth: '400px',

        margin: '0 auto',

        textAlign: 'center',

        border: '1px solid #ccc',

        borderRadius: '10px',

        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',

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

        color: '#fff',

        cursor: 'pointer',

        marginTop: '10px',

    };

 

    return (

        <div style={containerStyle}>

            <h2>Login</h2>

            <p>Please enter your login details to access your account.</p>

            <form style={formStyle}>

                <input type="email" placeholder="Email" style={inputStyle} />

                <input type="password" placeholder="Password" style={inputStyle} />

                <button type="submit" style={buttonStyle}>Login</button>

            </form>

            <p style={{ marginTop: '20px' }}>Don't have an account? <a href="/signup">Sign up</a></p>

        </div>

    );

}

 

export default Login;

