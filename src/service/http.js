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
    //Mise à jour de la fonction get
    static async get(url, params, accessToken = '') {
        try {
            const { data } = await axios.get(url, { 
                params , 
                headers: {
                  'Authorization': `Bearer ${accessToken}`,
                }
              });
            return data;
        } catch (e) {
            console.error(e);
            throw e;
        }
    }

    //Mise à jour de la fonction post
    static async post(url, data = {}, accessToken = '') {
        try {
            const { data: responseData, status } = await axios.post(url, data, {
                headers: {
                  'Content-Type': 'application/json',
                  'Authorization': `Bearer ${accessToken}`,
                }
              });
            return { data: responseData, status };
        } catch (e) {
            if(e.response){
                var errorMessage = e.response.data.message;
                var status = e.response.status;
                return { errorMessage, status};
            } else {
                return { status };
            }
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
