import axios from 'axios';

const url = 'https://api.pimo.studio/api/v1/reviews'

export const fetchReviews = (id, pageNo) => axios.get(`${url}?modelId=${id}&pageNo=${pageNo}`)