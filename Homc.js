import React from 'react';

import backgroundImage from '../asserts/wallpaper.jpg';  

 

const Home = () => {

    const sectionStyle = {

        backgroundImage: `url(${backgroundImage})`,

        backgroundSize: 'cover',

        backgroundPosition: 'center',

        height: '100vh',  

        display: 'flex',

        flexDirection: 'column',

        justifyContent: 'center',

        alignItems: 'top',

        color: 'indigo',  

        textAlign: 'center',

        padding: '0 10px',

    };

 

    return (

        <div style={sectionStyle}>

       

        </div>

    );

}

 

export default Home;