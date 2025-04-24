import { PokemonItemProps } from '../types'
import { PokemonItem } from './PokemonItem'
import { PokemonPagination } from './PokemonPagination'

export interface PokemonListProps {
  pokemonList: PokemonItemProps[]
}

export const PokemonList = ({ pokemonList }: PokemonListProps) => {
  return (
    <div className="w-xs md:w-2xl xl:w-5xl">
      <div className="flex flex-row flex-wrap justify-between">
        {pokemonList.map((item) => (
          <PokemonItem key={`${item.index}-${item.name}`} name={item.name} index={item.index} />
        ))}
      </div>
      <PokemonPagination />
    </div>
  )
}
