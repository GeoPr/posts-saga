import { alertReducer } from './reducers/alertReducer/alertReducer'
import { loaderReducer } from './reducers/loaderReducer/loaderReducer'
import { postsReducer } from './reducers/postsReducer/postsReducer'
import { combineReducers } from 'redux'

export const rootReducer = combineReducers({
	posts: postsReducer,
	loader: loaderReducer,
	alert: alertReducer,
})