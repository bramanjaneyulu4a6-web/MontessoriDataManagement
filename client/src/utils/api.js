import axios from 'axios';

const API = axios.create({ baseURL: 'http://localhost:5000' });

// This will be used in your "New Admission" form
export const checkDuplicates = (name, fatherName) => 
    API.get(`/students/search?name=${name}&fatherName=${fatherName}`);