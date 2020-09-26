import axios from "axios";
const ApiEndpoint =
    "https://api.roadcube.test/v1/stores/{{store_id}}/transactions";

export default class Transaction {
    constructor() {}

    static get = () => axios.get(ApiEndpoint);

    static post;

    static put;

    static delete;
}
