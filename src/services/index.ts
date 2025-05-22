import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const POKEMON_API = 'https://pokeapi.co/api/v2/pokemon/'

export interface PokemonApiPageResponce {
  count: number
  next: string | null
  previous: string | null
  results: pokemonApiList[]
}

export interface pokemonApiList {
  name: string
  url: string
}

export interface pokemonApiStat {
  base_stat: number
  effort: number
  stat: {
    name: string
    url: string
  }
}

export const pokemonListApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: POKEMON_API }),
  endpoints: (build) => ({
    getPokemonInitialList: build.query<PokemonApiPageResponce, void>({
      query: () => ``
    })
  })
})

export const { useGetPokemonInitialListQuery } = pokemonListApi
