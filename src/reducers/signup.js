// eslint-disable-next-line import/no-anonymous-default-export
export default (signup = [], action) => {
   switch (action.type) {
      case 'CLEAR':
         return true;
      case 'SIGNUP_BRAND':
         return action.payload;
      default:
         return signup;
   }
};