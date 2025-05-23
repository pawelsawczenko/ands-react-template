import { FaRegStar, FaStar } from 'react-icons/fa'
import { PokemonItemProps } from '../types'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../store/store'
import { POKEMON_API } from '../services'
import { addFavorite, removeFavorite } from '../store/pokemonFavoriteListSlice'
import { AnimationHoverWrapper } from './AnimationHoverWrapper'

export const ButtonFavorite = ({ name, index }: PokemonItemProps) => {
  const pokemonFavItems = useSelector((state: RootState) => state.pokemonFavoriteList.list)
  const dispatch = useDispatch<AppDispatch>()

  const isFavorite = pokemonFavItems.some(
    (pokemon) => pokemon.url === `${POKEMON_API}${index}/` && pokemon.name === name
  )

  const handleFavClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation()
    if (isFavorite) dispatch(removeFavorite({ name, index }))
    if (!isFavorite) dispatch(addFavorite({ name, index }))
  }
  return (
    <AnimationHoverWrapper>
      <button
        className={`mr-2 transition ${isFavorite ? 'text-red-500' : ''}  hover:text-red-800`}
        onClick={(e) => handleFavClick(e)}>
        {isFavorite ? <FaStar /> : <FaRegStar />}
      </button>
    </AnimationHoverWrapper>
  )
}
