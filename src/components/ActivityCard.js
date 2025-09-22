import React from 'react';
import './ActivityCard.css';

const ActivityCard = ({ activity, onApprove, onReject }) => {
    return (
        <div className="activity-card">
            <h3>{activity.title}</h3>
            <p>{activity.description}</p>
            <p><strong>Provider:</strong> {activity.provider}</p>
            <p><strong>Status:</strong> 
                {activity.valid === 'PENDING' && <span className="pending"> Pending</span>}
                {activity.valid === 'YES' && <span className="approved"> Approved</span>}
                {activity.valid === 'REJECT' && <span className="rejected"> Rejected</span>}
            </p>
            {activity.fileUrl && <a href={activity.fileUrl} target="_blank" rel="noopener noreferrer">View Certificate</a>}
            {onApprove && onReject && (
                <div className="btn-group">
                    <button onClick={() => onApprove(activity.id)}>Approve</button>
                    <button className="reject" onClick={() => onReject(activity.id)}>Reject</button>
                </div>
            )}
        </div>
    );
};

export default ActivityCard;
