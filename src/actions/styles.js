import * as api from '../api/styles.js';

export const getStyles = () => async (dispatch) => {
   try {
      const { data } = await api.fetchStyles();
      data.style.map(item => item.checked = false)
      dispatch({ type: 'FETCH_STYLE', payload: data });
   } catch (error) {
      console.log(error.message);
   }
};