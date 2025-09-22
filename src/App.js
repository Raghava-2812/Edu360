import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Auth/Login';
import RegisterStudent from './pages/Auth/RegisterStudent';
import RegisterTeacher from './pages/Auth/RegisterTeacher';
import StudentDashboard from './pages/Student/Dashboard';
import AddActivity from './pages/Student/AddActivity';
import Activities from './pages/Student/Activities';
import TeacherDashboard from './pages/Teacher/Dashboard';
import PendingActivities from './pages/Teacher/PendingActivities';
import AdminDashboard from './pages/Admin/Dashboard';
import Reports from './pages/Admin/Reports';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register/student" element={<RegisterStudent />} />
        <Route path="/register/teacher" element={<RegisterTeacher />} />

        {/* Student Routes */}
        <Route path="/student/dashboard" element={<StudentDashboard />} />
        <Route path="/student/add-activity" element={<AddActivity />} />
        <Route path="/student/activities" element={<Activities />} />

        {/* Teacher Routes */}
        <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
        <Route path="/teacher/pending-activities" element={<PendingActivities />} />

        {/* Admin Routes */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/reports" element={<Reports />} />

        {/* 404 fallback */}
        <Route path="*" element={<h2 style={{textAlign:'center', marginTop:'50px'}}>404 - Page Not Found</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
