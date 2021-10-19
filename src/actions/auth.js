import * as api from '../api/auth.js';
import Cookies from 'universal-cookie';

const login = (postData, axiosConfig) => async (dispatch) => {
   const cookies = new Cookies();
   var isExist = true;

   try {
      await api.login(postData, axiosConfig)
         .then((res) => {
            if (res.data.isExist === false) {
               isExist = false;
            } else {
               cookies.set('name', res.data.name, { path: '/', maxAge: 60 * 60 * 1000 });
               cookies.set('jwt', res.data.jwt, { path: '/', maxAge: 60 * 60 * 1000 });
            }
         })
      if (isExist) {
         dispatch({ type: 'LOGIN', payload: cookies.get('name') })
      } else {
         dispatch({ type: 'LOGIN', payload: "@LoginFail: " + Math.random() })
      }
   } catch (error) {
      console.log(error.message);
   }
};

const logout = () => async (dispatch) => {
   try {
      dispatch({ type: 'LOGOUT', payload: null })
   } catch (error) {
      console.log(error.message);
   }
};

export { login, logout }