import axios from 'axios';

const MAX_TIMEOUT = 200000;

// axios.defaults.baseURL = "https://pinkscrap.onrender.com/api/pink-maps";
axios.defaults.timeout = MAX_TIMEOUT;

// à decommenter si la consommation de l'API requiert une authentification
// axios.interceptors.request.use((config) => {
//     const accessToken = "";
//     if (accessToken) {
//         config.headers.Authorization = `Bearer ${accessToken}`;
//     }
    
//     return config;
// }, (error) => {
//     return Promise.reject(error);
// });

export class Http {
    static async get(url, params) {
        try {
            const { data } = await axios.get(url, { params });
            return data;
        } catch (e) {
            console.error(e);
            throw e;
        }
    }

    static async post(url, data) {
        try {
            const { data: responseData, status } = await axios.post(url, data);
            return { data: responseData, status };
        } catch (e) {
            console.error(e);
            throw e;
        }
    }

    static async put(url, data) {
        try {
            const response = await axios.put(url, data);
            return response.data;
        } catch (e) {
            console.error(e);
            throw e;
        }
    }

    static async delete(url, id) {
        try {
            const response = await axios.delete(url, id);
            return response.data;
        } catch (e) {
            console.error(e);
            throw e;
        }
    }
}
