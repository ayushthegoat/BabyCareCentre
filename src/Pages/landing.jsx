import React from 'react';
import backgroundImage from './background.jpg';

const Landing = () => {
    const landingStyles = {
        backgroundImage: `url(${backgroundImage})`, 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white', 
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    };

    const titleStyle = {
        fontSize: '3rem', 
        fontWeight: 'bold', 
        marginBottom: '20px', 
    };

    const paragraphStyle = {
        fontSize: '1.5rem', 
    };

    return (
        <div className="landing-container" style={landingStyles}>
            <div className='container'>
                <h1 style={titleStyle}>Welcome CHILD CARE CENTRE</h1>
                <p style={paragraphStyle}>All In One Management System to take care of your Children.
                Register and open to a whole word of management where it becomes easy to manage the day to day activities of monitoring your childs health .All Documentation in one place</p>
            </div>
        </div>
    );
}

export default Landing;
