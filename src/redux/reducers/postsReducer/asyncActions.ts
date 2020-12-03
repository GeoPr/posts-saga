import { showLoader, hideLoader } from './../loaderReducer/actions'
import { LOAD_POSTS } from './actionsTypes'
import { call, put, takeLatest } from 'redux-saga/effects'
import { setServerPosts } from './actions'

export function* loadPostsWatcher() {
  yield takeLatest(LOAD_POSTS, loadPostsFlow)
}

function* loadPostsFlow() {
  yield put(showLoader())
	const posts = yield call(loadPosts)
  yield put(setServerPosts(posts))
  yield put(hideLoader())
}

async function loadPosts() {
  return fetch(
    'https://jsonplaceholder.typicode.com/posts?_limit=5'
  ).then(response => response.json())
}
