import axios from 'axios';

const url = 'https://api.pimo.studio/api/v1/models'

export const fetchModelById = (id) => axios.get(`${url}/${id}`)
export const searchModels = (path) => axios.get(`${url}?${path}`)
export const fetchModels = (pageNo) =>  axios.get(`${url}?pageNo=${pageNo}`)
export const fetchModelInfo = (id) =>  axios.get(`${url}/${id}`)