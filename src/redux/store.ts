import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { rootReducer } from './rootReducer'
import { rootSaga } from './rootSaga'

const sagaMiddleware = createSagaMiddleware()
export const store = createStore(rootReducer, compose(
  applyMiddleware(sagaMiddleware),
  // @ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

sagaMiddleware.run(rootSaga)

export type TApp = ReturnType<typeof rootReducer>

type TProperties<T> = T extends {
  [key: string]: infer U
} ? U : never

export type TActions<T extends {
  [key: string]: (...args: any[]) => any
}> = ReturnType<TProperties<T>>