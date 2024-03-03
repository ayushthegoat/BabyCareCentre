import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import SignIn from './Pages/signin';
import Landing from './Pages/landing';
import Register from './Pages/register';
import PatientLogin from './Pages/PatientLogin';
import EmployeeLogin from './Pages/EmployeeLogin';
import MedicineList from './Pages/Medicines';
import './App.css';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item"><Link to="/" className="navbar-link">Home</Link></li>

                <li className="navbar-item"><Link to="/signin" className="navbar-link">Sign In</Link></li>
                <li className="navbar-item"><Link to="/register" className="navbar-link">Register</Link></li>
                <li className="navbar-item"><Link to="/patients" className="navbar-link">Patients</Link></li>
                <li className="navbar-item"><Link to="/employees" className="navbar-link">Employees</Link></li>
                <li className="navbar-item"><Link to="/medicines" className="navbar-link">Medicines</Link></li>
            </ul>
        </nav>
    );
}




const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/register" element={<Register/>} />
                <Route path="/patients" element={<PatientLogin/>} />
                <Route path="/employees" element={<EmployeeLogin/>} />
                <Route path="/medicines" element={<MedicineList/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
