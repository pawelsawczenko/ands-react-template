import { pokemonApiList } from '../store/pokemonListSlice'

import { PokemonItem } from './PokemonItem'
// import { PokemonPagination } from './PokemonPagination'

export interface PokemonListProps {
  pokemonList: pokemonApiList[]
}

export const PokemonList = ({ pokemonList }: PokemonListProps) => {
  return (
    // <div className="w-xs md:w-2xl xl:w-5xl">
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
    // {/* <PokemonPagination /> */}
    // </div>
  )
}
