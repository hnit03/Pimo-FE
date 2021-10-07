import * as api from '../api/categories.js';

export const getCategories = () => async (dispatch) => {
   try {
      const { data } = await api.getCategories();
      dispatch({ type: 'GET_CATEGORIES', payload: data });
   } catch (error) {
      console.log(error.message);
   }
};