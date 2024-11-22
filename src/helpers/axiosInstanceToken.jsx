import axios from "axios";

const token = localStorage.getItem("token");


const axiosInstanceToken = axios.create({
    baseURL: "http://127.0.0.1:3003/api", 
    headers:{
        "Content-Type": 'application/json',
        "Authorization": `Bearer ${token}`
    },
});
export default axiosInstanceToken;