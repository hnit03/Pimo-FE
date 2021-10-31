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