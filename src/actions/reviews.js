import * as api from '../api/reviews.js';

export const getReviews = (id, pageNo) => async (dispatch) => {
   try {
      const { data } = await api.fetchReviews(id, pageNo);
      dispatch({ type: 'FETCH_REVIEW', payload: data });
   } catch (error) {
      console.log(error.message);
   }
};