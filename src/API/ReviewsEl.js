import axios from 'axios';

export default class ReviewsEl {
    static async getAll() {
        const response = await axios.get('http://api.test-cargos.tw1.ru/api/v1/feedbacks/');
        return response.data;
    }
}