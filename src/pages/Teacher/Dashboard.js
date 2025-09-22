import React, { useEffect, useState } from 'react';
import { getTeacherProfile } from '../../api/api';
import './Teacher.css';

const TeacherDashboard = () => {
    const [teacher, setTeacher] = useState({});
    const token = localStorage.getItem('token');
    const teacherId = localStorage.getItem('userId');

    useEffect(() => {
        const fetchProfile = async () => {
            const res = await getTeacherProfile(teacherId, token);
            setTeacher(res.data);
        };
        fetchProfile();
    }, [teacherId, token]);

    return (
        <div className="teacher-container">
            <h2>Welcome, {teacher.fullName}</h2>
            <p>Department: {teacher.dept} | Section: {teacher.sec}</p>
            <p>Email: {teacher.email}</p>
            <p>Year: {teacher.year}</p>
            <p>Check pending requests to approve student certificates.</p>
        </div>
    );
};

export default TeacherDashboard;
