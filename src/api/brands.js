import axios from 'axios';

const url = 'https://api.pimo.studio/api/v1/brands'

export const signupBrand = (postData, axiosConfig) => axios.post(url, postData, axiosConfig)
export const fetchBrands = (pageNo) =>  axios.get(`${url}?PageNo=${pageNo}`)
export const searchBrands = (path) => axios.get(`${url}?${path}`)
export const fetchBrandById = (id) => axios.get(`${url}/profile/${id}`)