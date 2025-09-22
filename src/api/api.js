import axios from "axios";

const API_URL = "http://localhost:8080";

export const registerStudent = (data) => axios.post(`${API_URL}/auth/register-student`, data);
export const registerTeacher = (data) => axios.post(`${API_URL}/auth/register-teacher`, data);
export const login = (data) => axios.post(`${API_URL}/auth/login`, data);

export const getStudentProfile = (id, token) => axios.get(`${API_URL}/students/${id}`, {
    headers: { Authorization: `Bearer ${token}` }
});

export const getTeacherProfile = (id, token) => axios.get(`${API_URL}/teachers/${id}`, {
    headers: { Authorization: `Bearer ${token}` }
});

export const getActivitiesByStudent = (studentId, token) => axios.get(`${API_URL}/activities/student/${studentId}`, {
    headers: { Authorization: `Bearer ${token}` }
});

export const addActivity = (data, token) => axios.post(`${API_URL}/activities`, data, {
    headers: { Authorization: `Bearer ${token}` }
});

export const getPendingActivities = (teacherId, token) => axios.get(`${API_URL}/teachers/${teacherId}/pending-activities`, {
    headers: { Authorization: `Bearer ${token}` }
});

export const verifyActivity = (activityId, token) => axios.put(`${API_URL}/teachers/verify/${activityId}`, {}, {
    headers: { Authorization: `Bearer ${token}` }
});

export const rejectActivity = (activityId, token) => axios.put(`${API_URL}/teachers/reject/${activityId}`, {}, {
    headers: { Authorization: `Bearer ${token}` }
});
