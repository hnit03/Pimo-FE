// eslint-disable-next-line import/no-anonymous-default-export
export default (castings = [], action) => {
   switch (action.type) {
      case 'CREATE_CASTING':
         return action.payload;
      default:
         return castings;
   }
};