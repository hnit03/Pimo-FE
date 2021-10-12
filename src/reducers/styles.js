// eslint-disable-next-line import/no-anonymous-default-export
export default (styles = [], action) => {
   switch (action.type) {
      case 'FETCH_STYLE':
         return action.payload
      default:
         return styles;
   }
};