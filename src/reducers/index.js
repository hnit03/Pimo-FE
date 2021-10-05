import { combineReducers } from "redux";
import models from './models'
import auth from './auth'

export default combineReducers({
   models, auth
})