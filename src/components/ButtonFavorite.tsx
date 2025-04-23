import { FaRegStar } from 'react-icons/fa'
import { PokemonItemProps } from '../types'

export const ButtonFavorite = ({ name, index }: PokemonItemProps) => {
  const handleFavClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation()
    console.log(`fav ${index} - ${name}`)
  }
  return (
    <button className="mr-2 transition hover:text-red-800" onClick={(e) => handleFavClick(e)}>
      {/* <FaStar /> */}
      <FaRegStar />
    </button>
  )
}
