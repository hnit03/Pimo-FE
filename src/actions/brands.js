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

export const getBrands = (pageNo) => async (dispatch) => {
   try {
      
      const { data } = await api.fetchBrands(pageNo);
      
      dispatch({ type: 'FETCH_BRANDS', payload: data });
      console.log("brandData1");
      console.log("brandData",data);
   } catch (error) {
      console.log(error.message);
   }
};

export const searchBrands = (filter, pageNo) => async (dispatch) => {
   try {
      var path = '';
      if (filter.name !== null && filter.name !== '' && filter.name !== undefined) {
         path += '&Name=' + filter.name;
      }
      if (filter.address !== null && filter.address !== '' && filter.address !== undefined) {
         path += '&Address=' + filter.address;
      }
      if (filter.category !== 0) {
         path += '&BrandCateId=' + filter.category;
      }
      if (pageNo !== null) {
         path += '&PageNo=' + pageNo;
      }
      const { data } = await api.searchBrands(path);
      dispatch({ type: 'FETCH_BRANDS', payload: data });
   } catch (error) {
      console.log("Search models error: " + error.message);
   }
};

export const getInfo = (id) => async (dispatch) => {
   try {
      const { data } = await api.fetchBrandById(id);
      dispatch({ type: 'BRAND_INFO', payload: data });
   } catch (error) {
      console.log(error.message);
   }
};

export const clear = () => async (dispatch) => {
   // try {
   //    dispatch({ type: 'CLEAR', payload: true });
   // } catch (error) {
   //    console.log(error.message);
   // }
};