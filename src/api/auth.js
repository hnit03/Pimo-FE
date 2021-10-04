import axios from 'axios';

const url = 'https://api.pimo.studio/api/v1/auth'

export const login = (postData, axiosConfig) => axios.post(url, postData, axiosConfig)