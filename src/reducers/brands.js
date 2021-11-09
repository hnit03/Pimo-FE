// eslint-disable-next-line import/no-anonymous-default-export
export default (brands = [], action) => {
   switch (action.type) {
      case 'FETCH_BRANDS':
         return action.payload;
      case 'BRAND_INFO':
         return action.payload;
      default:
         return brands;
   }
};