import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PokemonData, PokemonStatData } from '../types'
import { POKEMON_API, pokemonApiStat } from '../services'

export interface PokemonComparisonState {
  comparedPokemonsIndexes: string[]
  comparedPokemons: PokemonData[]
  isLoading: boolean
  error: string
}

const initialState: PokemonComparisonState = {
  comparedPokemonsIndexes: ['25'],
  comparedPokemons: [],
  isLoading: false,
  error: ''
}

export const getPokemonComparisonDetails = createAsyncThunk(
  'pokemonComparison/fetchDetails',
  async ({ ids }: { ids: string[] }) => {
    const comparisonDetails = await Promise.all(
      ids.map(async (id) => {
        const response = await fetch(`${POKEMON_API}${id}`)
        const pokemonData = await response.json()

        const pokemonStats: PokemonStatData[] = []
        pokemonData.stats.forEach((stat: pokemonApiStat) => {
          pokemonStats.push({ name: stat.stat.name, value: stat.base_stat })
        })

        return {
          index: String(pokemonData.id),
          name: pokemonData.name,
          height: pokemonData.height,
          weight: pokemonData.weight,
          img: pokemonData.sprites.other['official-artwork'].front_default,
          stats: pokemonStats
        }
      })
    )

    return comparisonDetails
  }
)

export const pokemonComparisonSlice = createSlice({
  name: 'pokemonComparison',
  initialState,
  reducers: {
    addPokemonToComparison: (state, action: PayloadAction<string>) => {
      if (state.comparedPokemonsIndexes.length < 2)
        state.comparedPokemonsIndexes.push(action.payload)
    },
    removePokemonFromComparison: (state, action: PayloadAction<string>) => {
      state.comparedPokemonsIndexes = state.comparedPokemonsIndexes.filter(
        (index) => index !== action.payload
      )
      state.comparedPokemons = state.comparedPokemons.filter(
        (pokemon) => pokemon.index !== action.payload
      )
    }
  },
  extraReducers(builder) {
    builder
      .addCase(getPokemonComparisonDetails.pending, (state) => {
        state.isLoading = true
        state.error = ''
      })
      .addCase(getPokemonComparisonDetails.rejected, (state, action) => {
        state.isLoading = false
        state.error =
          action.error.message || 'Something went wrong when fetching pokemon comparison details'
      })
      .addCase(getPokemonComparisonDetails.fulfilled, (state, action) => {
        state.comparedPokemons = []
        action.payload.forEach((pokemonDetails) => state.comparedPokemons.push(pokemonDetails))
        state.isLoading = false
      })
  }
})

export const { addPokemonToComparison, removePokemonFromComparison } =
  pokemonComparisonSlice.actions

export default pokemonComparisonSlice.reducer
