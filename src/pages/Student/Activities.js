import React, { useEffect, useState } from 'react';
import { getActivitiesByStudent } from '../../api/api';
import './Student.css';

const Activities = () => {
    const [activities, setActivities] = useState([]);
    const token = localStorage.getItem('token');
    const studentId = localStorage.getItem('userId');

    useEffect(() => {
        const fetchActivities = async () => {
            const res = await getActivitiesByStudent(studentId, token);
            setActivities(res.data);
        };
        fetchActivities();
    }, [studentId, token]);

    return (
        <div className="student-container">
            <h2>My Certificates</h2>
            {activities.length === 0 && <p>No activities added yet.</p>}
            {activities.map(act => (
                <div className="activity-card" key={act.id}>
                    <h3>{act.title}</h3>
                    <p>{act.description}</p>
                    <p>Provider: {act.provider}</p>
                    <p>Status: 
                        {act.valid === 'PENDING' && <span style={{color:'orange'}}> Pending</span>}
                        {act.valid === 'YES' && <span style={{color:'green'}}> Approved</span>}
                        {act.valid === 'REJECT' && <span style={{color:'red'}}> Rejected</span>}
                    </p>
                    {act.fileUrl && <a href={act.fileUrl} target="_blank" rel="noopener noreferrer">View Certificate</a>}
                </div>
            ))}
        </div>
    );
};

export default Activities;
