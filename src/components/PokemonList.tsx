import { pokemonApiList } from '../store/pokemonListSlice'
import { PokemonItem } from './PokemonItem'

export interface PokemonListProps {
  pokemonList: pokemonApiList[]
}

export const PokemonList = ({ pokemonList }: PokemonListProps) => {
  return (
    <div className="flex flex-row flex-wrap justify-between">
      {pokemonList.map((item) => {
        const urlArr = item.url.split('/')

        return (
          <PokemonItem
            key={`${item.url}-${item.name}`}
            name={item.name}
            index={urlArr[urlArr.length - 2]}
          />
        )
      })}
    </div>
  )
}
