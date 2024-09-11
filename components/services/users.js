import { axiosInstance } from './instance';
import { ApiRoutes } from './constants';

const axiosRequest = async (url, query) => {
    return await axiosInstance.get(url, {params: query}).catch(e => console.log(e))
}

export const user = async (query) => {
    return (await axiosRequest(ApiRoutes.GET_USER, {query})).data
}