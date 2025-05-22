import { pokemonApiList } from '../services'
import { getIndexFromUrl } from '../utils'
import { PokemonItem } from './PokemonItem'

export interface PokemonListProps {
  pokemonList: pokemonApiList[]
}

export const PokemonList = ({ pokemonList }: PokemonListProps) => {
  return (
    <div className="grid gap-x-8 gap-y-4 mb-4 w-xs md:w-2xl xl:w-5xl md:grid-cols-2 xl:grid-cols-3">
      {pokemonList.map((item) => (
        <PokemonItem
          key={`${item.url}-${item.name}`}
          name={item.name}
          index={getIndexFromUrl(item.url)}
        />
      ))}
    </div>
  )
}
