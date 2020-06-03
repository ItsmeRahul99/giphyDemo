import axios from 'axios';
import CONSTANT from "./constants";

export default class API {
    static async userAgreement(params) {
        let response = await axios.post(CONSTANT.API_BASE_URL  , params)
        return response.data
    }
}