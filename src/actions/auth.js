import * as api from '../api/auth.js';

export const login = (postData, axiosConfig) => async (dispatch) => {
   try {
      await api.login(postData, axiosConfig)
         .then((res) => {
            console.log("RESPONSE RECEIVED: ", res);
         })
         .catch((err) => {
            console.log("AXIOS ERROR: ", err);
         })
      // dispatch({ type: 'LOGIN'});
   } catch (error) {
      console.log(error.message);
   }
};