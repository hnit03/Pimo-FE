import axios from 'axios';

const url = 'https://api.pimo.studio/api/v1/brands'

// export const signupBrand = (mail, name, brandCateId, phone, address) => 
// axios.post(`${url}?mail=${mail}&name=${name}&description=Hello&brandCateId=${brandCateId}&phone=${phone}&address=${address}`)

export const signupBrand = (postData, axiosConfig) => axios.post(url, postData, axiosConfig)