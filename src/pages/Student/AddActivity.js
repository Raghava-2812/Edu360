import React, { useState } from 'react';
import { addActivity } from '../../api/api';
import './Student.css';

const AddActivity = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [provider, setProvider] = useState('');
    const [file, setFile] = useState(null);

    const token = localStorage.getItem('token');
    const studentId = localStorage.getItem('userId');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('studentId', studentId);
        formData.append('type', 'CERTIFICATE');
        formData.append('title', title);
        formData.append('description', description);
        formData.append('provider', provider);
        formData.append('file', file);

        try {
            await addActivity(formData, token);
            alert('Certificate request submitted!');
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="student-container">
            <form className="activity-form" onSubmit={handleSubmit}>
                <h2>Add Certificate</h2>
                <input type="text" placeholder="Certificate Name" value={title} onChange={e=>setTitle(e.target.value)} required />
                <input type="text" placeholder="Description" value={description} onChange={e=>setDescription(e.target.value)} required />
                <input type="text" placeholder="Provider" value={provider} onChange={e=>setProvider(e.target.value)} required />
                <input type="file" onChange={e=>setFile(e.target.files[0])} required />
                <button type="submit">Submit Request</button>
            </form>
        </div>
    );
};

export default AddActivity;
