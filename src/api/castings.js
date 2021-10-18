import axios from 'axios';

const url = 'https://api.pimo.studio/api/v1/castings'

export const createCasting = (postData, axiosConfig) => axios.post(url, postData, axiosConfig)
export const fetchCastings = (pageNo) =>  axios.get(`${url}?PageNo=${pageNo}`)