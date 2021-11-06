import { createStore, applyMiddleware } from 'redux'
import { logger } from 'redux-logger'
import promiseMiddleware from 'redux-promise-middleware'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import rootReducer from './reducer'

const persistConfig = {
  key: 'root',
  storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(
  persistedReducer,
  applyMiddleware(promiseMiddleware, logger)
)

export const persistor = persistStore(store)
