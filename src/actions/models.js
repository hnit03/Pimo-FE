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

export const getInfo = (id) => async (dispatch) => {
   try {
      const { data } = await api.fetchModelInfo(id);
      dispatch({ type: 'MODEL_INFO', payload: data });
   } catch (error) {
      console.log(error.message);
   }
};

export const searchModels = (filter, pageNo) => async (dispatch) => {
   try {
      var skinList = []
      filter.skin.map(item => {
         if (item.checked === true) {
            skinList.push(item.name)
         }
      })
      var path = '';
      if (filter.name !== null && filter.name !== '' && filter.name !== undefined) {
         path += '&Name=' + filter.name;
      }
      if (filter.sex !== null && filter.sex.length > 0 && filter.sex !== undefined) {
         filter.sex.map(id => {
            path += '&Gender=' + id;
         })
      }
      if (filter.style !== null && filter.style.length > 0 && filter.style !== undefined) {
         filter.style.map(id => {
            path += '&StyleId=' + id;
         })
      }
      if (filter.tattoo !== null && filter.tattoo !== undefined) {
         path += '&Tatoo=' + filter.tattoo;
      }
      if (filter.age.min_age !== null && filter.age.min_age > 0 && filter.age.min_age !== undefined) {
         path += '&AgeMin=' + filter.age.min_age;
      }
      if (filter.age.max_age !== null && filter.age.max_age > 0 && filter.age.max_age !== undefined) {
         path += '&AgeMax=' + filter.age.max_age;
      }
      if (filter.height.min_height !== null && filter.height.min_height > 0 && filter.height.min_height !== undefined) {
         path += '&HeightMin=' + filter.height.min_height;
      }
      if (filter.height.max_height !== null && filter.height.max_height > 0 && filter.height.max_height !== undefined) {
         path += '&HeightMax=' + filter.height.max_height;
      }
      if (skinList !== null && skinList.length > 0 && skinList !== undefined) {
         skinList.map(name => {
            path += '&Skin=' + name;
         })
      }
      if (pageNo !== null) {
         path += '&PageNo=' + pageNo;
      }
      console.log(path);
      const { data } = await api.searchModels(path);
      dispatch({ type: 'FETCH_MODELS', payload: data });
   } catch (error) {
      console.log("Search models error: " + error.message);
   }
};
