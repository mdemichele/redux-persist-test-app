import { configureStore } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from '@mdemichele/redux-persist'
import storage from '@mdemichele/redux-persist/es/storage'
import counterReducer from './counterSlice'

const persistConfig = {
  key: 'root',
  storage,
}

const persistedCounterReducer = persistReducer(persistConfig, counterReducer)

export const store = configureStore({
  reducer: {
    counter: persistedCounterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE', 'persist/REGISTER'],
      },
    }),
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
