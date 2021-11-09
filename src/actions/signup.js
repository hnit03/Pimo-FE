export const clear = () => async (dispatch) => {
   try {
      dispatch({ type: 'CLEAR', payload: true });
   } catch (error) {
      console.log(error.message);
   }
};