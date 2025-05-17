// reafactor
import { pokemonApiList } from '../store/pokemonListSlice'
import { getIndexFromUrl } from '../utils'
import { PokemonItem } from './PokemonItem'

export interface PokemonListProps {
  pokemonList: pokemonApiList[]
}

export const PokemonList = ({ pokemonList }: PokemonListProps) => {
  return (
    <div className="flex flex-row flex-wrap justify-between">
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
