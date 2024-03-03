import React, { useState } from 'react';
import { Form, Button, Table } from 'react-bootstrap';

const EmployeeLogin = () => {
  const [employees, setEmployees] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
     
      const response = await fetch('http://localhost:8080/api/employee/getAllEmployees', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setEmployees(data.data);
      } else {
        console.error('Failed to fetch employees');
      }
    } catch (error) {
      console.error('Error occurred during login:', error);
    }
  };

  return (
    <div className="signin-container" style={containerStyle}>
      <h2 style={titleStyle}>Employee Login</h2>
      <Form onSubmit={handleLogin} style={formStyle}>
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

      <div style={dataContainerStyle}>
        <h3 style={dataTitleStyle}>Employee Data:</h3>
        <Table striped bordered hover style={tableStyle}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Cell No</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee, index) => (
              <tr key={index}>
                <td>{employee.empId}</td>
                <td>{employee.firstName} {employee.lastName}</td>
                <td>{employee.email}</td>
                <td>{employee.role}</td>
                <td>{employee.cellNo}</td>
                <td>{employee.salary}</td>
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
  padding: '20px',
};

const titleStyle = {
  marginBottom: '20px',
};

const formStyle = {
  width: '100%',
  maxWidth: '400px',
  marginBottom: '20px',
};

const inputStyle = {
  width: '100%',
  marginBottom: '10px',
};

const buttonStyle = {
  width: '100%',
  marginBottom: '10px',
};

const dataContainerStyle = {
  width: '100%',
  marginTop: '20px',
};

const dataTitleStyle = {
  marginBottom: '10px',
};

const tableStyle = {
  width: '100%',
};

export default EmployeeLogin;
