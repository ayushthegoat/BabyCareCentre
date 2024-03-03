import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [doctorData, setDoctorData] = useState([]);

  const handleSignIn = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('http://localhost:8080/api/doctor/getAllDoctors', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        const responseData = await response.json();
        console.log('Fetched doctor data:', responseData.data); 
  
        setDoctorData(responseData.data); 
      } else {
        console.error('Failed to fetch doctors');
      }
    } catch (error) {
      console.error('Error occurred while fetching doctors:', error);
    }
  };
  
  

  return (
    <div className="signin-container">
      <h2>Sign In</h2>
      <Form onSubmit={handleSignIn}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
            type="email" 
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
          />
        </Form.Group>
        
        <Button variant="primary" type="submit">
          Sign In
        </Button>
      </Form>

      <div>
  <h3>Doctor Data:</h3>
  <ul>
    {doctorData.map((doctor, index) => (
      <li key={index}>
        ID: {doctor.doctorId}, Name: {doctor.firstName} {doctor.lastName}
      </li>
    ))}
  </ul>
</div>

    </div>
  );
}

export default SignIn;
