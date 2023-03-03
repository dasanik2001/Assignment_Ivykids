import axios from "axios"

const instsnce = axios.create({

    baseURL: "https://assignment-backend.up.railway.app/"


})

export default instsnce;
