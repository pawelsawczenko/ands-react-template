import { configureStore } from '@reduxjs/toolkit'
import pokemonListReducer from './pokemonListSlice'

const RootReducer = {
  pokemonList: pokemonListReducer
}

export const store = configureStore({
  reducer: RootReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
