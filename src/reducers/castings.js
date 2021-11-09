// eslint-disable-next-line import/no-anonymous-default-export
export default (castings = [], action) => {
   switch (action.type) {
      case 'CREATE_CASTING':
         return action.payload;
      case 'FETCH_CASTINGS':
         return action.payload;
      case 'CASTING_INFO':
         return action.payload;
      case 'CASTING_INFO_BY_BRAND':
         return action.payload;
      case 'CHECK_OWNER':
         return action.payload;
      case 'SEARCH_CASTING':
         return action.payload;
      default:
         return castings;
   }
};