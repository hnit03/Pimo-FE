import * as api from '../api/auth.js';
import Cookies from 'universal-cookie';

const login = (postData, axiosConfig) => async (dispatch) => {
   const cookies = new Cookies();

   try {
      await api.login(postData, axiosConfig)
         .then((res) => {
            cookies.set('name', res.data.name, { path: '/' , maxAge: 60 * 60});
            cookies.set('jwt', res.data.jwt, { path: '/' , maxAge: 60 * 60});
         })
      dispatch({ type: 'LOGIN', payload: cookies.get('name')})
   } catch (error) {
      console.log(error.message);
   }
};

const logout = () => async (dispatch) => {
   try {
      dispatch({ type: 'LOGOUT', payload: null})
   } catch (error) {
      console.log(error.message);
   }
};

export {login, logout}