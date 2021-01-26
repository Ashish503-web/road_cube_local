import axios from "axios";

axios.defaults.headers.Authorization = `Bearer ${localStorage.getItem(
    "accessToken"
)}`;

export default () => {
    return axios.create({
        baseURL: process.env.VUE_APP_DEFAULT_API_URL
    });
};
