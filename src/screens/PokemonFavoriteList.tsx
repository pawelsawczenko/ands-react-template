import { useSelector } from 'react-redux'
import { PokemonList } from '../components/PokemonList'
import { RootState } from '../store/store'
import { EmptySection } from '../components/EmptySection'

export const PokemonFavoriteList = () => {
  const pokemonFavItems = useSelector((state: RootState) => state.pokemonFavoriteList.list)

  return pokemonFavItems.length ? (
    <PokemonList pokemonList={pokemonFavItems} />
  ) : (
    <EmptySection message={'Please add more Pokémons to favorites'} />
  )
}
