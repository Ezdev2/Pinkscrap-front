import { Http } from './http';

export default class HomeService {
    static async getList(params) {
        return await Http.get("", params);
    }
}
