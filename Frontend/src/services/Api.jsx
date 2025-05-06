import axios from "axios";

//criando uma instancia no axios para facilitar a chamada da api
const api = axios.create({

    baseURL: "http://localhost:5000" // Define a url base para todas requisições feitas com essa instancia
})

export default api;