// eslint-disable-next-line import/no-anonymous-default-export
export default (brands = [], action) => {
   switch (action.type) {
      case 'SIGNUP_BRAND':
         return action.payload;
      case 'FETCH_BRANDS':
         return action.payload;
      default:
         return brands;
   }
};