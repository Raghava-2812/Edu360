import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-box">
                <h1>Welcome to RVRJC Hub</h1>
                <p>Select an option to continue:</p>
                <div className="btn-group">
                    <Link to="/login" className="btn">Login</Link>
                    <Link to="/register/student" className="btn">Register as Student</Link>
                    <Link to="/register/teacher" className="btn">Register as Teacher</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
