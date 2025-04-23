import { FaBalanceScaleRight } from 'react-icons/fa'
import { PokemonItemProps } from '../types'

export const ButtonCompare = ({ name, index }: PokemonItemProps) => {
  const handleCompareClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation()
    console.log(`compare ${index} - ${name}`)
  }

  return (
    <button className="mr-2 transition hover:text-blue-700" onClick={(e) => handleCompareClick(e)}>
      <FaBalanceScaleRight />
    </button>
  )
}
