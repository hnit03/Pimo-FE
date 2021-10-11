import axios from 'axios';

const url = 'https://api.pimo.studio/api/v1/models'

export const fetchModelById = (id) => axios.get(`${url}/${id}`)
export const searchModels = (gender, styleId, ageMin, ageMax, heightMin, heightMax, skin, pageNo) => 
axios.get(`${url}/search?Gender=1&StyleId=3&AgeMin=1&AgeMax=1&HeightMin=1&HeightMax=1&Skin=1&PageNo=1`)
export const fetchModels = (pageNo) =>  axios.get(`${url}?pageNo=${pageNo}`)
export const fetchModelInfo = (id) =>  axios.get(`${url}/${id}`)