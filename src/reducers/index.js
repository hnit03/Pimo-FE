import { combineReducers } from "redux";
import models from './models'
import auth from './auth'
import categories from './categories'
import brands from './brands'

export default combineReducers({
   models, auth, categories, brands
})