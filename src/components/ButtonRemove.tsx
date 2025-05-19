import { TiDelete } from 'react-icons/ti'
import { PokemonItemProps } from '../types'
import { AppDispatch } from '../store/store'
import { useDispatch } from 'react-redux'
import { removePokemonFromComparison } from '../store/pokemonComparisonSlice'

export const ButtonRemove = ({ index }: PokemonItemProps) => {
  const dispatch = useDispatch<AppDispatch>()

  const handleDeleteClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation()
    dispatch(removePokemonFromComparison(index))
  }

  return (
    <button className="mr-2 transition hover:text-red-700" onClick={(e) => handleDeleteClick(e)}>
      <TiDelete />
    </button>
  )
}
