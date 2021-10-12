// eslint-disable-next-line import/no-anonymous-default-export
export default (reviews = [], action) => {
   switch (action.type) {
      case 'FETCH_REVIEW':
         return action.payload
      default:
         return reviews;
   }
};