import { fork } from 'redux-saga/effects'
import { hideAlertWatcher } from './reducers/alertReducer/asyncActions'
import { loadPostsWatcher } from './reducers/postsReducer/asyncActions'

export function* rootSaga() {
	yield fork(loadPostsWatcher)
	yield fork(hideAlertWatcher)
}