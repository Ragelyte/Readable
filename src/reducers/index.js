import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import posts from "./posts";
import comments from "./comments";
import categories from "./categories"


export default combineReducers({
    posts,
    comments,
    categories,
    router: routerReducer
})




