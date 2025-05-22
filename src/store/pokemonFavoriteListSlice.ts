import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { POKEMON_API, pokemonApiList } from '../services'
import { PokemonItemProps } from '../types'
import { getIndexFromUrl } from '../utils'

export interface PokemonFavoriteListState {
  list: pokemonApiList[]
}

const initialState: PokemonFavoriteListState = {
  list: [
    {
      name: 'bulbasaur',
      url: 'https://pokeapi.co/api/v2/pokemon/1/'
    },
    {
      name: 'charmander',
      url: 'https://pokeapi.co/api/v2/pokemon/4/'
    },
    {
      name: 'charizard',
      url: 'https://pokeapi.co/api/v2/pokemon/6/'
    },
    {
      name: 'squirtle',
      url: 'https://pokeapi.co/api/v2/pokemon/7/'
    },
    {
      name: 'blastoise',
      url: 'https://pokeapi.co/api/v2/pokemon/9/'
    }
  ]
}

export const pokemonFavoriteListSlice = createSlice({
  name: 'pokemonFavoriteList',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<PokemonItemProps>) => {
      state.list.push({ name: action.payload.name, url: `${POKEMON_API}${action.payload.index}/` })
      state.list.sort((a, b) => Number(getIndexFromUrl(a.url)) - Number(getIndexFromUrl(b.url)))
    },
    removeFavorite: (state, action: PayloadAction<PokemonItemProps>) => {
      state.list = state.list.filter(
        (pokemon) =>
          pokemon.url !== `${POKEMON_API}${action.payload.index}/` &&
          pokemon.name !== action.payload.name
      )
    }
  }
})

export const { addFavorite, removeFavorite } = pokemonFavoriteListSlice.actions

export default pokemonFavoriteListSlice.reducer
