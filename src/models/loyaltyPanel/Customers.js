import axios from "axios";

axios.defaults.headers.Authorization = `Bearer ${localStorage.getItem(
    "accessToken"
)}`;

const ApiEndpoint = `https://api.roadcube.tk/v1/companies`;

export default class Customers {
    constructor(item = {}) {
        
    }

    static get = () =>
        axios.get(`${ApiEndpoint}/${localStorage.getItem("companyId")}/customers`);
}
