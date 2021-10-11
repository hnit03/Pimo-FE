// eslint-disable-next-line import/no-anonymous-default-export
export default (models = [], action) => {
   switch (action.type) {
      case 'FETCH_MODEL_BY_ID':
         return action.payload;
      case 'FETCH_MODELS':
         return action.payload
      case 'MODEL_INFO':
         return action.payload
      default:
         return models;
   }
};