import { configureStore } from '@reduxjs/toolkit'
import pokemonListReducer from './pokemonListSlice'
import pokemonDetailsReducer from './pokemonDetailsSlice'

const RootReducer = {
  pokemonList: pokemonListReducer,
  pokemonDetails: pokemonDetailsReducer
}

export const store = configureStore({
  reducer: RootReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
