import React, { useState } from 'react';
//import './register.css';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Address:', address);
       
    };

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '90vh',
        backgroundColor: '#f0f0f0', 
        padding: '20px',
        borderRadius: '8px',
        boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.1)', 
    };

    const inputStyle = {
        width: '100%',
        marginBottom: '10px',
        padding: '8px',
        borderRadius: '4px',
        border: '1px solid #ccc',
    };

    const buttonStyle = {
        width: '100%',
        padding: '10px',
        borderRadius: '4px',
        border: 'none',
        backgroundColor: '#4CAF50', 
        color: 'white',
        cursor: 'pointer',
    };

    return (
        <div className="register-form" style={formStyle}>
            <h2>Register</h2>
            <form onSubmit={handleRegister} style={{ width: '100%' }}>
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} style={inputStyle} />
                </div>
                <div className="form-group">
                    <label>Address:</label>
                    <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} style={inputStyle} />
                </div>
                <button type="submit" style={buttonStyle}>Register</button>
            </form>
        </div>
    );
};

export default Register;
