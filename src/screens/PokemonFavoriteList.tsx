import { useSelector } from 'react-redux'
import { PokemonList } from '../components/PokemonList'
import { RootState } from '../store/store'

export const PokemonFavoriteList = () => {
  const pokemonFavItems = useSelector((state: RootState) => state.pokemonFavoriteList.list)

  return (
    <div className="w-xs md:w-2xl xl:w-5xl">
      <PokemonList pokemonList={pokemonFavItems} />
    </div>
  )
}
