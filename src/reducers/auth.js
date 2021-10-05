// eslint-disable-next-line import/no-anonymous-default-export
export default (auth = '', action) => {
   switch (action.type) {
      case 'LOGIN':
         return action.payload;
      case 'LOGOUT':
         return '';
      default:
         return auth;
   }
};