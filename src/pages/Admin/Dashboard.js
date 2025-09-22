import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Admin.css';

const AdminDashboard = () => {
    const [students, setStudents] = useState([]);
    const [teachers, setTeachers] = useState([]);
    const [activities, setActivities] = useState([]);
    const token = localStorage.getItem('token');
    const API_URL = "http://localhost:8080/api/admin";

    useEffect(() => {
        const fetchData = async () => {
            const studentsRes = await axios.get(`${API_URL}/students`, { headers: { Authorization: `Bearer ${token}` }});
            setStudents(studentsRes.data);
            const teachersRes = await axios.get(`${API_URL}/teachers`, { headers: { Authorization: `Bearer ${token}` }});
            setTeachers(teachersRes.data);
            const activitiesRes = await axios.get(`${API_URL}/activities`, { headers: { Authorization: `Bearer ${token}` }});
            setActivities(activitiesRes.data);
        };
        fetchData();
    }, [token]);

    return (
        <div className="admin-container">
            <h2>Admin Dashboard</h2>
            <div className="admin-cards">
                <div className="card"><h3>Total Students</h3><p>{students.length}</p></div>
                <div className="card"><h3>Total Teachers</h3><p>{teachers.length}</p></div>
                <div className="card"><h3>Total Activities</h3><p>{activities.length}</p></div>
            </div>
        </div>
    );
};

export default AdminDashboard;
