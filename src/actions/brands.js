import * as api from '../api/brands.js';

export const signupBrand = (postData, axiosConfig) => async (dispatch) => {
   try {
      // const { data } = await api.signupBrand(mail, name, brandCateId, phone, address);
      const { data } = await api.signupBrand(postData, axiosConfig)
      dispatch({ type: 'SIGNUP_BRAND', payload: data });
   } catch (error) {
      console.log(error.message);
   }
};