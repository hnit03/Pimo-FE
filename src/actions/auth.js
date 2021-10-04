import * as api from '../api/auth.js';

export const login = (postData, axiosConfig) => async () => {
   var { data } = ''
   try {
      await api.login(postData, axiosConfig)
         .then((res) => {
            // console.log("RESPONSE RECEIVED: ", res.data.jwt);
            data = res.data
         })
         console.log("Data: " + data);
   } catch (error) {
      console.log(error.message);
   }
};