import { SHOW_ALERT } from './actionsTypes'
import { put, takeEvery, delay } from 'redux-saga/effects';
import { hideAlert } from './actions';

export function* hideAlertWatcher() {
	yield takeEvery(SHOW_ALERT, hideAlertFlow)
}

function* hideAlertFlow() {
	yield delay(2000)
	yield(put(hideAlert()))
}