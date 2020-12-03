import axios from "axios";

axios.defaults.headers.Authorization = `Bearer ${localStorage.getItem(
    "accessToken"
)}`;

const ApiEndpoint = `${process.env.VUE_APP_DEFAULT_API_URL}/companies`;

export default class Customers {
    constructor(item = {}) {}

    static get = () =>
        axios.get(
            `${ApiEndpoint}/${localStorage.getItem("companyId")}/customers`
        );
}
