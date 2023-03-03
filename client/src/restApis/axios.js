import axios from "axios"

const instsnce = axios.create({

    baseURL: "https://assignment-backend.up.railway.app/"
    // baseURL: "http://127.0.0.1:5001/"


})

export default instsnce;
