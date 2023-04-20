import axios from "axios";

const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_RAPID_URL,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        // 'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_KEY,
        // 'X-RapidAPI-Host': process.env.NEXT_PUBLIC_RAPID_HOST
    }
})


export default axiosInstance