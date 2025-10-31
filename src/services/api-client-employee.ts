import axios from "axios";

// FIXME - change to dynamic URL
export default axios.create({
    baseURL: "/employee-api"
})