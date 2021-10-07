import axios from 'axios';

const url = 'https://api.pimo.studio/api/v1/brandcategories'

export const getCategories = () => axios.get(`${url}`)