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
  comparedPokemonsIndexes: ['4', '7'],
  comparedPokemons: [
    {
      index: '4',
      name: 'charmander',
      height: 6,
      weight: 85,
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
      stats: [
        { name: 'hp', value: 39 },
        { name: 'attack', value: 52 },
        { name: 'defense', value: 43 },
        { name: 'special-attack', value: 60 },
        { name: 'special-defense', value: 50 },
        { name: 'speed', value: 65 }
      ]
    },
    {
      index: '7',
      name: 'squirtle',
      height: 5,
      weight: 90,
      img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png',
      stats: [
        { name: 'hp', value: 44 },
        { name: 'attack', value: 48 },
        { name: 'defense', value: 65 },
        { name: 'special-attack', value: 50 },
        { name: 'special-defense', value: 64 },
        { name: 'speed', value: 43 }
      ]
    }
  ],
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
          index: pokemonData.id,
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
      state.comparedPokemonsIndexes.filter((index) => index != action.payload)
      state.comparedPokemons.filter((pokemon) => pokemon.index != action.payload)
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
      })
  }
})

export const { addPokemonToComparison, removePokemonFromComparison } =
  pokemonComparisonSlice.actions

export default pokemonComparisonSlice.reducer
