import axios from "axios";

window.axios = axios
axios.defaults.withCredentials = false
// axios.defaults.baseURL = "http://localhost:8081/api"
let backendUrl = "http://" + window.location.hostname.toString() + ":3001/api"
//"http://localhost:3001/api"
axios.defaults.baseURL = backendUrl
