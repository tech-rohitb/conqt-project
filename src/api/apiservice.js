import axios from "axios";
import {API_URL} from "./apiRoutes"


export const submitFormData = async (data) => {
    try {
        const response = await axios.post(`${API_URL}/submit` , data)
            return response.data ;
    } catch (error) {
        console.error(`Error submmitting data` , error) ;
        throw error ;
    }
}