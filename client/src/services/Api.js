import axios from 'axios';

const API = axios.create({
    baseURL:"http://localhost:8000/api/v1"
})

API.interceptors.request.use((req)=>{
    console.log("token is inside APi.js",localStorage.getItem('token'));
    console.log("req just after token is :",req);
    if(localStorage.getItem('token')){
        req.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
    }
    console.log("req is",req)
    return req;
})

export default API;