import * as api from '../api/castings.js';

export const createCasting = (filter, authorization) => async (dispatch) => {
   try {
      var postData = {
         name: filter.name,
         description: filter.description,
         status: true,
         openTime: filter.startDate,
         closeTime: filter.endDate,
         logo: filter.image,
         salary: filter.salary,
         address: filter.district,
         request: ''
      };
      if (filter.bust) postData.request = (postData.request) + `<br/>Vòng 1: ${filter.bust}`;
      if (filter.waist) postData.request = postData.request + `<br/>Vòng 2: ${filter.waist}`;
      if (filter.hips) postData.request = postData.request + `<br/>Vòng 3: ${filter.hips}`;
      var checkStyle = false
      filter.style.map(item => {
         if (item.checked === true) checkStyle = true
      })
      if (checkStyle) {
         postData.request = (postData.request) + `<br/>Phong cách: `;
         var countStyle = 0
         filter.style.map((item, index) => {
            if (item.checked === true) {
               if (countStyle === 0) {
                  postData.request = (postData.request) + item.name
                  countStyle++
               } else {
                  postData.request = (postData.request) + `, ${item.name}`
               }
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
         postData.request = (postData.request) + `<br/>Giới tính: `;
         var countSex = 0
         filter.sex.map((item, index) => {
            if (item.checked === true) {
               if (countSex === 0) {
                  postData.request = (postData.request) + item.name
                  countSex++
               } else {
                  postData.request = (postData.request) + `, ${item.name}`
               }
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
      console.log(postData);
      console.log(axiosConfig);
      const { data } = await api.createCasting(postData, axiosConfig);
      console.log(data);
      dispatch({ type: 'CREATE_CASTING', payload: data });
   } catch (error) {
      console.log("Search models error: " + error.message);
   }
};