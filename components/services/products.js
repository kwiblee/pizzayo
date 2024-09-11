import { axiosInstance } from './instance';
import { ApiRoutes } from './constants';

const axiosRequest = async (url, query) => {
    return await axiosInstance.get(url, {params: query}).catch(e => console.log(e))
}

export const search = async (query) => {
    return query.length !== 0 ? (await axiosRequest(ApiRoutes.SEARCH_PRODUCTS, {query})).data : [];
};

export const product = async (query) => {
    return (await axiosRequest(ApiRoutes.GET_PRODUCT, {query})).data[0]
}

export const all = async (query) => {
    return (await axiosRequest(ApiRoutes.GET_ALL_PRODUCT)).data
}