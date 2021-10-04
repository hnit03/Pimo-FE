export default (models = [], action) => {
   switch (action.type) {
      case 'FETCH_MODEL_BY_ID':
         return action.payload;
      default:
         return models;
      // case 'CREATE':
      //    return [...posts, action.payload];
      // case 'LIKE':
      // case 'UPDATE':
      //    return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
      // case 'DELETE':
      //    return posts.filter((post) => post._id !== action.payload);
      // default:
      //    return posts;
   }
};