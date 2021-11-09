import { combineReducers } from "redux";
import models from './models'
import auth from './auth'
import categories from './categories'
import brands from './brands'
import reviews from './reviews'
import styles from './styles'
import castings from './castings'
import signup from './signup'

export default combineReducers({
   models, auth, categories, brands, reviews, styles, castings, signup
})