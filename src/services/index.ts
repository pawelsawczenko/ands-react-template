export const POKEMON_API = 'https://pokeapi.co/api/v2/pokemon/'

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
