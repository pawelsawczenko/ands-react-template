import { configureStore } from '@reduxjs/toolkit'
import pokemonListReducer from './pokemonListSlice'
import pokemonDetailsReducer from './pokemonDetailsSlice'
import pokemonFavoriteListReducer from './pokemonFavoriteListSlice'
import pokemonComparisonReducer from './pokemonComparisonSlice'

const RootReducer = {
  pokemonList: pokemonListReducer,
  pokemonDetails: pokemonDetailsReducer,
  pokemonFavoriteList: pokemonFavoriteListReducer,
  pokemonComparison: pokemonComparisonReducer
}

export const store = configureStore({
  reducer: RootReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
