import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { POKEMON_API } from '../services'

// reafactor
export interface pokemonApiList {
  name: string
  url: string
}

export interface PokemonListState {
  list: pokemonApiList[]
  pagination: {
    currentPage: number
    pokemonsCount: number
    previous: string | null
    next: string | null
  }
  isLoading: boolean
  error: string
}

const initialState: PokemonListState = {
  list: [],
  pagination: {
    currentPage: 1,
    pokemonsCount: 0,
    previous: null,
    next: null
  },
  isLoading: false,
  error: ''
}

export const getInitialPokemonList = createAsyncThunk('pokemonList/fetchInitialList', async () => {
  const response = await fetch(POKEMON_API)
  return response.json()
})

export const getPokemonListPage = createAsyncThunk(
  'pokemonList/fetchListPage',
  async ({ url }: { url: string; actionType: 'previous' | 'next' }) => {
    const response = await fetch(url)
    return response.json()
  }
)

export const pokemonListSlice = createSlice({
  name: 'pokemonList',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getInitialPokemonList.pending, (state) => {
        state.isLoading = true
        state.error = ''
      })
      .addCase(getInitialPokemonList.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message || 'Something went wrong when fetching initial list'
      })
      .addCase(getInitialPokemonList.fulfilled, (state, action) => {
        state.list = action.payload.results
        state.pagination.pokemonsCount = action.payload.count
        state.pagination.next = action.payload.next
        state.pagination.previous = action.payload.previous
        state.isLoading = false
      })
    builder
      .addCase(getPokemonListPage.pending, (state) => {
        state.isLoading = true
        state.error = ''
      })
      .addCase(getPokemonListPage.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message || 'Something went wrong when fetching the page'
      })
      .addCase(getPokemonListPage.fulfilled, (state, action) => {
        state.list = action.payload.results
        state.pagination.pokemonsCount = action.payload.count
        state.pagination.next = action.payload.next
        state.pagination.previous = action.payload.previous
        state.isLoading = false
        state.pagination.currentPage =
          action.meta.arg.actionType === 'next'
            ? state.pagination.currentPage + 1
            : state.pagination.currentPage - 1
      })
  }
})

export default pokemonListSlice.reducer
