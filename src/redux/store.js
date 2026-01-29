import { configureStore } from '@reduxjs/toolkit'
import userReducer from './ManageSlice'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // localStorage by default
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import { combineReducers } from 'redux'

// Persist config
const persistConfig = {
  key: 'root',
  storage,
}

// Combine reducers (in case you add more later)
const rootReducer = combineReducers({
  user: userReducer,
})

// Wrap reducer with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer)

// Create store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store)