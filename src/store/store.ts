import { combineReducers, configureStore } from '@reduxjs/toolkit'
import pokemonListReducer from './pokemonListSlice'
import pokemonDetailsReducer from './pokemonDetailsSlice'
import pokemonFavoriteListReducer from './pokemonFavoriteListSlice'
import pokemonComparisonReducer from './pokemonComparisonSlice'
import storage from 'redux-persist/lib/storage'
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE
} from 'redux-persist'
import { pokemonListApi } from '../services'

const persistConfig = {
  key: 'reactPokemon',
  storage,
  whitelist: ['pokemonFavoriteList', 'pokemonComparison'],
  blacklist: ['pokemonList', 'pokemonDetails']
}

const RootReducer = combineReducers({
  pokemonList: pokemonListReducer,
  pokemonDetails: pokemonDetailsReducer,
  pokemonFavoriteList: pokemonFavoriteListReducer,
  pokemonComparison: pokemonComparisonReducer,
  [pokemonListApi.reducerPath]: pokemonListApi.reducer
})

const persistedReducer = persistReducer(persistConfig, RootReducer)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
      }
    }).concat(pokemonListApi.middleware)
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
