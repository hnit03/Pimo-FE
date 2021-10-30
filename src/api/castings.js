import axios from 'axios';

const url = 'https://api.pimo.studio/api/v1/castings'

export const createCasting = (postData, axiosConfig) => axios.post(url, postData, axiosConfig)
export const fetchCastings = (pageNo) =>  axios.get(`${url}?PageNo=${pageNo}`)
export const fetchCastingById = (id) => axios.get(`${url}/information/${id}`)
export const fetchCastingByBrandId = (id) => axios.get(`${url}/brand/${id}`)