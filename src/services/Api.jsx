import axios from "axios";

//criando uma instancia no axios para facilitar a chamada da api
const api = axios.create({

    baseURL: "https://vnw-back-end.onrender.com" // Define a url base para todas requisições feitas com essa instancia
})

export default api;