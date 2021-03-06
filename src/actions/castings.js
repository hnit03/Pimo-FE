import * as api from '../api/castings.js';

export const createCasting = (filter, authorization) => async (dispatch) => {
   try {
      var postData = {
         name: filter.name,
         description: filter.description,
         openTime: filter.startDate,
         closeTime: filter.endDate,
         poster: filter.image,
         salary: filter.salary,
         address: filter.district,
         request: '',
         genders: [], 
         styles: []
      };
      if (filter.bust) postData.request = (postData.request) + `<br/>Vòng 1: ${filter.bust}`;
      if (filter.waist) postData.request = postData.request + `<br/>Vòng 2: ${filter.waist}`;
      if (filter.hips) postData.request = postData.request + `<br/>Vòng 3: ${filter.hips}`;
      var checkStyle = false
      filter.style.map(item => {
         if (item.checked === true) checkStyle = true
      })
      if (checkStyle) {
         filter.style.map((item, index) => {
            if (item.checked === true) {
               postData.styles.push(item.id)
            }
         })
      }
      var checkSkin = false
      filter.skinColor.map(item => {
         if (item.checked === true) checkSkin = true
      })
      if (checkSkin) {
         postData.request = (postData.request) + `<br/>Màu da: `;
         var countSkin = 0
         filter.skinColor.map((item, index) => {
            if (item.checked === true) {
               if (countSkin === 0) {
                  postData.request = (postData.request) + item.name
                  countSkin++
               } else {
                  postData.request = (postData.request) + `, ${item.name}`
               }
            }
         })
      }
      var checkSex = false
      filter.sex.map(item => {
         if (item.checked === true) checkSex = true
      })
      if (checkSex) {
         filter.sex.map((item, index) => {
            if (item.checked === true) {
               postData.genders.push(item.id)
            }
         })
      }
      var check = false
      filter.hairColors1.map(item => {
         if (item.checked === true) check = true
      })
      if (check) {
         postData.request = (postData.request) + `<br/>Màu tóc: `;
         var countHair1 = 0
         filter.hairColors1.map((item, index) => {
            if (item.checked === true) {
               if (countHair1 === 0) {
                  postData.request = (postData.request) + item.name
                  countHair1++
               } else {
                  postData.request = (postData.request) + `, ${item.name}`
               }
            }
         })
         if (filter.hairColors2.length > 0) {
            filter.hairColors2.map((item, index) => {
               if (item.checked === true) {
                  postData.request = (postData.request) + `, ${item.name}`
               }
            })
         }
      } else {
         filter.hairColors2.map(item => {
            if (item.checked === true) check = true
         })
         if (check) {
            postData.request = (postData.request) + `<br/>Màu tóc: `;
            var countHair2 = 0
            filter.hairColors2.map((item, index) => {
               if (item.checked === true) {
                  if (countHair2 === 0) {
                     postData.request = (postData.request) + item.name
                     countHair2++
                  } else {
                     postData.request = (postData.request) + `, ${item.name}`
                  }
               }
            })
         }
      }
      let axiosConfig = {
         headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
            'authorization': authorization
         }
      };
      const { data } = await api.createCasting(postData, axiosConfig);
      if(data.success) {
         dispatch({ type: 'CREATE_CASTING', payload: "@SUCCESS: " + Math.random() });
      }
   } catch (error) {
      console.log("Search models error: " + error.message);
   }
};

export const getCastings = (pageNo) => async (dispatch) => {
   try {
      const { data } = await api.fetchCastings(pageNo);
      console.log("error",data);
      dispatch({ type: 'FETCH_CASTINGS', payload: data });
   } catch (error) {
      console.log(error.message);
   }
};

export const getInfo = (id) => async (dispatch) => {
   try {
      const { data } = await api.fetchCastingById(id);
      dispatch({ type: 'CASTING_INFO', payload: data });
   } catch (error) {
      console.log(error.message);
   }
};

export const getInfoByBrandID = (id) => async (dispatch) => {
   try {
      const { data } = await api.fetchCastingByBrandId(id);
      dispatch({ type: 'CASTING_INFO_BY_BRAND', payload: data });
   } catch (error) {
      console.log(error.message);
   }
};

export const checkOwner = (jwt, modelId) => async (dispatch) => {
   try {
      let axiosConfig = {
         headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
            'authorization': 'Bearer ' + jwt
         }
      };
      const { data } = await api.getCastingBrowser(axiosConfig);
      let check = false
      data.castingBrowses.map(item => {
         if (item.model.id == modelId) {
            check = true
         }
      })
      dispatch({ type: 'CHECK_OWNER', payload: check });
   } catch (error) {
      console.log(error.message);
   }
};

export const searchCasting = (filter, pageNo) => async (dispatch) => {
   try {
      
      var path = '';
      if (filter.name !== null && filter.name !== '' && filter.name !== undefined) {
         path += '&Name=' + filter.name;
      }
      if (filter.address !== null && filter.address !== '' && filter.address !== undefined) {
         path += '&Address=' + filter.address;
      }
      if (filter.sex !== null && filter.sex.length > 0 && filter.sex !== undefined) {
         filter.sex.map(id => {
            path += '&Genders=' + id;
         })
      }
      if (filter.style !== null && filter.style.length > 0 && filter.style !== undefined) {
         filter.style.map(id => {
            path += '&Styles=' + id;
         })
      }
      if (filter.dateTime.start !== null && filter.dateTime.start !== '' && filter.dateTime.start !== undefined) {
         path += '&StartTime=' + (new Date(filter.dateTime.start).toISOString());
      }
      if (filter.dateTime.end !== null && filter.dateTime.end !== '' && filter.dateTime.end !== undefined) {
         path += '&EndTime=' + (new Date(filter.dateTime.end).toISOString());
      }
      if (pageNo !== null) {
         path += '&PageNo=' + pageNo;
      }
      console.log("path",path);
      const { data } = await api.searchCasting(path);
      dispatch({ type: 'SEARCH_CASTING', payload: data });
   } catch (error) {
      console.log("Search event error: " + error.message);
   }
};