import axios from "axios";
const REST_API_BASE_URL = "http://localhost:5079/api/Empresas";
const USERNAME = "admin";
const PASSWORD = "admin";

// Configura Axios para enviar cookies con las solicitudes
axios.defaults.withCredentials = true;

const headers = {
    "Content-Type": "application/json", // Asegúrate de establecer el tipo de contenido adecuado si es necesario
};

export const EmpresaList = () => {
    return axios.get(REST_API_BASE_URL, { headers: headers });
};

export const getEmpresaById = (id) => {
    return axios.get(REST_API_BASE_URL + "/" + id, {
    });
};

export const createEmpresa = (empresa) => {
    return axios.post(REST_API_BASE_URL, empresa, {
        headers: headers,
    });
};

export const updateEmpresa = (id, empresa) => {
    return axios.put(REST_API_BASE_URL + "/" + id, empresa, {
        headers: headers,
    });
};

export const deleteEmpresa = (id) => {
    return axios.delete(REST_API_BASE_URL + "/" + id, {
        headers: headers,
    });
};