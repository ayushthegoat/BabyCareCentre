import React, { useState } from 'react';
import { Form, Button, Table } from 'react-bootstrap';

const PatientLogin = () => {
  const [patients, setPatients] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
     
      const response = await fetch('http://localhost:8080/api/patient/getAllPatients', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setPatients(data.data);
      } else {
        console.error('Failed to fetch patients');
      }
    } catch (error) {
      console.error('Error occurred during login:', error);
    }
  };

  return (
    <div className="signin-container" style={containerStyle}>
      <h2 style={titleStyle}>Patient Login</h2>
      <Form onSubmit={handleLogin}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
            type="email" 
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)} 
            style={inputStyle}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(e) => setPassword(e.target.value)} 
            style={inputStyle}
          />
        </Form.Group>
        
        <Button variant="primary" type="submit" style={buttonStyle}>
          Login
        </Button>
      </Form>

      <div>
        <h3 style={dataTitleStyle}>Patient Data:</h3>
        <Table striped bordered hover style={tableStyle}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Date of Admission</th>
              <th>Bed Allotted</th>
              <th>Payment Status</th>
              <th>Patient Problem</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient, index) => (
              <tr key={index}>
                <td>{patient.patId}</td>
                <td>{patient.firstName} {patient.lastName}</td>
                <td>{patient.email}</td>
                <td>{patient.dateOfAdmission}</td>
                <td>{patient.bedAlloted}</td>
                <td>{patient.paymentStatus}</td>
                <td>{patient.patientProblem}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}

// Inline CSS styles
const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100vh',
  backgroundColor: '#f0f0f0',
};

const titleStyle = {
  marginBottom: '20px',
};

const inputStyle = {
  width: '300px',
  marginBottom: '10px',
};

const buttonStyle = {
  width: '300px',
  marginBottom: '10px',
};

const dataTitleStyle = {
  marginTop: '20px',
};

const tableStyle = {
  width: '90%',
  margin: 'auto',
};

export default PatientLogin;
