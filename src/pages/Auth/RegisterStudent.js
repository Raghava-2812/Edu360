import React, { useState } from 'react';
import { registerStudent } from '../../api/api';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const RegisterStudent = () => {
    const [form, setForm] = useState({ email:'', password:'' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await registerStudent(form);
            alert('Registered successfully! Login now.');
            navigate('/login');
        } catch(err) {
            setError(err.response?.data?.message || 'Registration failed');
        }
    };

    return (
        <div className="auth-container">
            <form className="auth-form" onSubmit={handleSubmit}>
                <h2>Student Registration</h2>
                {error && <p className="error">{error}</p>}
                {Object.keys(form).map(key => 
                    <input key={key} type={key==='password'?'password':'text'} placeholder={key.charAt(0).toUpperCase()+key.slice(1)} name={key} value={form[key]} onChange={handleChange} required />
                )}
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegisterStudent;
