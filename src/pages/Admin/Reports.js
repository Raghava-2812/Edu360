import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Admin.css';

const Reports = () => {
    const [activities, setActivities] = useState([]);
    const token = localStorage.getItem('token');
    const API_URL = "http://localhost:8080/api/admin";

    useEffect(() => {
        const fetchActivities = async () => {
            const res = await axios.get(`${API_URL}/activities/report`, { headers: { Authorization: `Bearer ${token}` }});
            setActivities(res.data);
        };
        fetchActivities();
    }, [token]);

    return (
        <div className="admin-container">
            <h2>Reports</h2>
            <table>
                <thead>
                    <tr>
                        <th>Student</th>
                        <th>Activity</th>
                        <th>Type</th>
                        <th>Status</th>
                        <th>Provider</th>
                    </tr>
                </thead>
                <tbody>
                    {activities.map(act => (
                        <tr key={act.id}>
                            <td>{act.studentName}</td>
                            <td>{act.title}</td>
                            <td>{act.type}</td>
                            <td>{act.valid}</td>
                            <td>{act.provider}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Reports;
