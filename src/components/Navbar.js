import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const navigate = useNavigate();
    const role = localStorage.getItem('role');

    const logout = () => {
        localStorage.clear();
        navigate('/login');
    };

    return (
        <nav className="navbar">
            <div className="logo">RVRJC Hub</div>
            <div className="nav-links">
                {role === 'STUDENT' && <>
                    <Link to="/student/dashboard">Dashboard</Link>
                    <Link to="/student/add-activity">Add Certificate</Link>
                    <Link to="/student/activities">My Certificates</Link>
                </>}
                {role === 'TEACHER' && <>
                    <Link to="/teacher/dashboard">Dashboard</Link>
                    <Link to="/teacher/pending-activities">Pending</Link>
                </>}
                {role === 'ADMIN' && <>
                    <Link to="/admin/dashboard">Dashboard</Link>
                    <Link to="/admin/reports">Reports</Link>
                </>}
                <button onClick={logout}>Logout</button>
            </div>
        </nav>
    );
};

export default Navbar;
