import React, { useEffect, useState } from 'react';
import { getStudentProfile } from '../../api/api';
import Sidebar from '../../components/Sidebar';
import './Student.css';

const StudentDashboard = () => {
    const [student, setStudent] = useState({});
    const token = localStorage.getItem('token');
    const studentId = localStorage.getItem('userId');

    useEffect(() => {
        const fetchStudent = async () => {
            const res = await getStudentProfile(studentId, token);
            setStudent(res.data);
        };
        fetchStudent();
    }, [studentId, token]);

    return (
        <div className="dashboard-container">
            <Sidebar role="STUDENT" />
            <div className="dashboard-content">
                <h1>Welcome, {student.fullName}</h1>
                <p><strong>Registration No:</strong> {student.regNo}</p>
                <p><strong>Department:</strong> {student.dept} | <strong>Section:</strong> {student.sec}</p>
                <p><strong>Year:</strong> {student.year} | <strong>Semester:</strong> {student.sem}</p>
                {student.sem >= 2 && <p><strong>CGPA:</strong> {student.cgpa}</p>}
            </div>
        </div>
    );
};

export default StudentDashboard;
