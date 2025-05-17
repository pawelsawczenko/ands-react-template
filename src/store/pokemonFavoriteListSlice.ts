import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { pokemonApiList } from './pokemonListSlice'
import { POKEMON_API } from '../services'
import { PokemonItemProps } from '../types'

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
    },
    removeFavorite: (state, action: PayloadAction<PokemonItemProps>) => {
      const pokemonIndex = state.list.findIndex(
        (pokemon) => pokemon.url === `${POKEMON_API}${action.payload.index}/`
      )
      if (!pokemonIndex) return
      state.list.slice(pokemonIndex, 1)
    }
  }
})

export const { addFavorite, removeFavorite } = pokemonFavoriteListSlice.actions

export default pokemonFavoriteListSlice.reducer
