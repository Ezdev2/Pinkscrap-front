import { Http } from './http';

export default class HomeService {
    //Mise à jour de scrap endpoint
    static async getList(params) {
        return await Http.get("https://pinkscrap-back.onrender.com/v1/pink-maps", params);
    }
    static async getMapTypes(params) {
        return await Http.get("https://scrap.io/api/autocomplete/gmap-types", params);
    }
    static async getMapLocations(params) {
        return await Http.get("https://scrap.io/api/autocomplete/gmap-locations", params);
    }
    static async getCountries(params) {
        return await Http.get("https://restcountries.com/v3.1/all", params);
    }
    //Modification de la fonction d'appel de SSE endpoint 
    static getSeeEvents() {
        return "https://pinkscrap-back.onrender.com/api/events";
    }
    //Ajout de Stripe Subscription endpoint
    static async getSubscription(params, accessToken) {
        return await Http.get("https://pinkscrap-back.onrender.com/api/check-subscription", params, accessToken);
    }

    //Ajout de register post endpoint
    static async postFormData(data) {
        return await Http.post("https://pinkscrap-back.onrender.com/user/register", data);
    }

    //Ajout de login post endpoint
    static async postLoginData(data) {
        return await Http.post("https://pinkscrap-back.onrender.com/user/login", data);
    }

    //Ajout de token post endpoint
    static async postTokenCheck(accessToken) {
        return await Http.post("https://pinkscrap-back.onrender.com/user/is-token-valid", {}, accessToken);
    }

    //Ajout de password change post endpoint
    static async postPasswordChange(data) {
        return await Http.post("https://pinkscrap-back.onrender.com/user/change-password", data);
    }

    //Ajout de account delete endpoint
    static async deleteAccount(id) {
        return await Http.delete("https://pinkscrap-back.onrender.com/user/delete-account", id);
    }
}
