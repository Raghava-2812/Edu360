import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Top Navbar Buttons */}
      <div className="top-nav">
        <Link to="/login" className="top-btn">Login</Link>
        <Link to="/register/student" className="top-btn">Register</Link>
      </div>
      {/* Hero Section */}
      <div className="home-content">
        <div className="hero-text">
          <h1>Welcome to RVRJC Hub</h1>
          <p>
            A centralized platform for students and faculty to manage certificates, achievements, 
            workshops, internships, and co-curricular activities. Track progress, get verified approvals, 
            and build your digital portfolio seamlessly.
          </p>
          <div className="btn-group">
            <Link to="/login" className="btn">Login</Link>
            <Link to="/register/student" className="btn">Register as Student</Link>
            <Link to="/register/teacher" className="btn">Register as Teacher</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
