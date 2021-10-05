import * as api from '../api/models.js';

export const getModelById = (id) => async (dispatch) => {
   try {
      const { data } = await api.fetchModelById(id);
      dispatch({ type: 'FETCH_MODEL_BY_ID', payload: data });
   } catch (error) {
      console.log(error.message);
   }
};

export const getModels = (pageNo) => async (dispatch) => {
   try {
      const { data } = await api.fetchModels(pageNo);
      dispatch({ type: 'FETCH_MODELS', payload: data });
   } catch (error) {
      console.log(error.message);
   }
};
