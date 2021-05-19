import axios from "axios";

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'https://reqres.in',
        //update with new API
        headers: {
            authorization: token
        }
    })
}