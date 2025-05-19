import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { PokemonData, PokemonStatData } from '../types'
import { POKEMON_API } from '../services'

interface pokemonApiStat {
  base_stat: number
  effort: number
  stat: {
    name: string
    url: string
  }
}

export interface PokemonDetailsState {
  details: PokemonData
  isLoading: boolean
  error: string
}

const initialState: PokemonDetailsState = {
  details: {
    index: '',
    name: '',
    height: 0,
    weight: 0,
    img: '',
    stats: [{ name: '', value: 0 }]
  },
  isLoading: false,
  error: ''
}

export const getPokemonDetails = createAsyncThunk(
  'pokemonDetails/fetchDetails',
  async ({ id }: { id: string }) => {
    const response = await fetch(`${POKEMON_API}${id}`)
    return response.json()
  }
)

export const pokemonDetailsSlice = createSlice({
  name: 'pokemonDetails',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getPokemonDetails.pending, (state) => {
        state.isLoading = true
        state.error = ''
      })
      .addCase(getPokemonDetails.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message || 'Something went wrong when fetching pokemon details'
      })
      .addCase(getPokemonDetails.fulfilled, (state, action) => {
        const pokemonStats: PokemonStatData[] = []

        action.payload.stats.forEach((stat: pokemonApiStat) => {
          pokemonStats.push({ name: stat.stat.name, value: stat.base_stat })
        })

        state.details = {
          index: action.payload.id,
          name: action.payload.name,
          height: action.payload.height,
          weight: action.payload.weight,
          img: action.payload.sprites.other['official-artwork'].front_default,
          stats: pokemonStats
        }

        state.isLoading = false
      })
  }
})

export default pokemonDetailsSlice.reducer
