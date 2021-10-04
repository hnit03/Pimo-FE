import axios from 'axios';

const url = 'https://api.pimo.studio/api/v1'

export const fetchModelById = (id) => axios.get(`${url}/models/${id}`)
export const fetchModels = (gender, styleId, ageMin, ageMax, heightMin, heightMax, skin, pageNo) => 
axios.get(`${url}/models/search?Gender=1&StyleId=3&AgeMin=1&AgeMax=1&HeightMin=1&HeightMax=1&Skin=1&PageNo=1`)
// export const createPost = (newPost) => axios.post(url, newPost)
// export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost)
// export const deletePost = (id) => axios.delete(`${url}/${id}`)
// export const likePost = (id) => axios.patch(`${url}/${id}/likePost`)