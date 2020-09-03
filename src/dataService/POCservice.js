import * as axios from 'axios'
import { API } from './config'

export const RequestData = async function(){
    try {
        const response = await axios.post(`${API}`);
        console.log(response);
        return response.data;
    } catch (error) {
        console.error(error);
        return [];
    }
};

export default RequestData;