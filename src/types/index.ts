export interface PokemonItemProps {
  name: string
  index: string
}

export interface PokemonData {
  index: string
  name: string
  height: number
  weight: number
  img: string
  stats: PokemonStatData[]
}

export interface PokemonStatData {
  name: string
  value: number
}
