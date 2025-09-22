import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = ({ role }) => {
    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate('/login');
    };

    return (
        <div className="sidebar">
            <h2>RVRJC Hub</h2>
            <nav>
                {role === 'STUDENT' && <>
                    <Link to="/student/dashboard">Dashboard</Link>
                    <Link to="/student/add-activity">Add Certificate</Link>
                    <Link to="/student/activities">My Certificates</Link>
                </>}
                {role === 'TEACHER' && <>
                    <Link to="/teacher/dashboard">Dashboard</Link>
                    <Link to="/teacher/pending-activities">Pending Requests</Link>
                </>}
                {role === 'ADMIN' && <>
                    <Link to="/admin/dashboard">Dashboard</Link>
                    <Link to="/admin/reports">Reports</Link>
                </>}
                <button onClick={logout}>Logout</button>
            </nav>
        </div>
    );
};

export default Sidebar;
