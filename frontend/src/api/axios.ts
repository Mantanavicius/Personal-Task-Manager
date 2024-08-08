import axios from "axios";

const instance = axios.create({
    baseURL: "/api/tasks"
});

export default instance