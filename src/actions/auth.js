import * as api from '../api/auth.js';
import * as apiBrand from '../api/brands';
import Cookies from 'universal-cookie';
import jwt from 'jwt-decode';

const login = (postData, axiosConfig) => async (dispatch) => {
   const cookies = new Cookies();
   var isExist = false;

   try {
      await api.login(postData, axiosConfig)
         .then((res) => {
            console.log(res.data);
            const role = jwt(res.data.jwt)[Object.keys(jwt(res.data.jwt))[3]];
            if (role === 'Brand') {
               if (res.data.isExist === false) {
                  isExist = false;
               } else {
                  isExist = true;
                  apiBrand.fetchBrandById(jwt(res.data.jwt)[Object.keys(jwt(res.data.jwt))[4]])
                     .then((result) => {
                        cookies.set('logo', result.data.brand.logo, { path: '/', maxAge: 60 * 60 * 1000 });
                     })
                     .catch((err) => {
                        console.log(err.message);
                     });
                  cookies.set('name', res.data.name, { path: '/', maxAge: 60 * 60 * 1000 });
                  cookies.set('jwt', res.data.jwt, { path: '/', maxAge: 60 * 60 * 1000 });
                  cookies.set('id', jwt(res.data.jwt)[Object.keys(jwt(res.data.jwt))[4]], { path: '/', maxAge: 60})
               }
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