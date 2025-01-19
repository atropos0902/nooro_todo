import axios from "axios";

// Axios Interceptor Instance
export const AxiosInstance = axios.create({
    baseURL: "http://localhost:5000/tasks/"
});