import { Http } from './http';

export default class HomeService {
    static async getList(params) {
        return await Http.get("https://pinkscrap.onrender.com/api/pink-maps", params);
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
}
