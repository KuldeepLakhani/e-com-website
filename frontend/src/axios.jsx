import axios from "axios";

const API = axios.create({
  baseURL: "https://e-com-website-fi0f.onrender.com",
});
delete API.defaults.headers.common["Authorization"];
export default API;
