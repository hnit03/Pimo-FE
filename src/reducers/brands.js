// eslint-disable-next-line import/no-anonymous-default-export
export default (brands = [], action) => {
   switch (action.type) {
      case 'SIGNUP_BRAND':
         return action.payload;
      default:
         return brands;
   }
};