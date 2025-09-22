import React, { useEffect, useState } from 'react';
import { getPendingActivities, verifyActivity, rejectActivity } from '../../api/api';
import './Teacher.css';

const PendingActivities = () => {
    const [activities, setActivities] = useState([]);
    const token = localStorage.getItem('token');
    const teacherId = localStorage.getItem('userId');

    const fetchActivities = async () => {
        const res = await getPendingActivities(teacherId, token);
        setActivities(res.data);
    }

    useEffect(() => {
        fetchActivities();
    }, []);

    const handleVerify = async (id) => {
        await verifyActivity(id, token);
        fetchActivities();
    };

    const handleReject = async (id) => {
        await rejectActivity(id, token);
        fetchActivities();
    };

    return (
        <div className="teacher-container">
            <h2>Pending Certificates</h2>
            {activities.map(act => (
                <div className="activity-card" key={act.id}>
                    <h3>{act.title}</h3>
                    <p>{act.description}</p>
                    <p>Provider: {act.provider}</p>
                    <div className="btn-group">
                        <button onClick={()=>handleVerify(act.id)}>Approve</button>
                        <button onClick={()=>handleReject(act.id)} className="reject">Reject</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default PendingActivities;
