import {createStore, combineReducers} from 'redux'
import homePage from './Containers/HomePage/reducer'
import userPage from './Containers/UserPage/reducers'
const reducers = combineReducers({homePage, userPage});
export default createStore(reducers)