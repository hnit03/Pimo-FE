import * as api from '../api/index.js';

export const getModelById = (id) => async (dispatch) => {
   try {
      const { data } = await api.fetchModelById(id);
      dispatch({ type: 'FETCH_MODEL_BY_ID', payload: data });
   } catch (error) {
      console.log(error.message);
   }
};
