import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://127.0.0.1:3003/api", 
    headers:{
        "Content-Type": 'application/json'
    },
});
export default axiosInstance;