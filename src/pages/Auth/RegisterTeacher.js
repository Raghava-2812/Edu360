import React, { useState } from 'react';
import { registerTeacher } from '../../api/api';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const RegisterTeacher = () => {
    const [form, setForm] = useState({ email:'', password:'', fullName:'', dept:'', sec:'', year:'' });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await registerTeacher(form);
            alert('Teacher registered successfully! Login now.');
            navigate('/login');
        } catch(err) {
            setError(err.response?.data?.message || 'Registration failed');
        }
    };

    return (
        <div className="auth-container">
            <form className="auth-form" onSubmit={handleSubmit}>
                <h2>Teacher Registration</h2>
                {error && <p className="error">{error}</p>}
                {Object.keys(form).map(key => 
                    <input key={key} type={key==='password'?'password':'text'} placeholder={key.charAt(0).toUpperCase()+key.slice(1)} name={key} value={form[key]} onChange={handleChange} required />
                )}
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default RegisterTeacher;
