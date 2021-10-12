import axios from 'axios';

const url = 'https://api.pimo.studio/api/v1/styles'

export const fetchStyles = () => axios.get(`${url}`)