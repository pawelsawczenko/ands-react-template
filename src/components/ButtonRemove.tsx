import { TiDelete } from 'react-icons/ti'
import { PokemonItemProps } from '../types'

export const ButtonRemove = ({ name, index }: PokemonItemProps) => {
  const handleDeleteClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation()
    console.log(`delete ${index} - ${name}`)
  }

  return (
    <button className="mr-2 transition hover:text-red-700" onClick={(e) => handleDeleteClick(e)}>
      <TiDelete />
    </button>
  )
}
