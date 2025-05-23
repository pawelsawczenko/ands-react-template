import { FaBalanceScaleRight } from 'react-icons/fa'
import { PokemonItemProps } from '../types'
import { AppDispatch, RootState } from '../store/store'
import { useDispatch, useSelector } from 'react-redux'
import {
  addPokemonToComparison,
  removePokemonFromComparison
} from '../store/pokemonComparisonSlice'
import toast from 'react-hot-toast'
import { AnimationHoverWrapper } from './AnimationHoverWrapper'

export const ButtonCompare = ({ name, index }: PokemonItemProps) => {
  const comparedPokemonsIndexes = useSelector(
    (state: RootState) => state.pokemonComparison.comparedPokemonsIndexes
  )

  const dispatch = useDispatch<AppDispatch>()

  const isInComparison = comparedPokemonsIndexes.includes(index)
  const isComparisonFull = !(comparedPokemonsIndexes.length < 2)

  const handleCompareClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation()
    if (isInComparison) dispatch(removePokemonFromComparison(index))
    if (!isComparisonFull && !isInComparison) dispatch(addPokemonToComparison(index))
    if (isComparisonFull && !isInComparison)
      toast.error(
        `Can't add ${
          name.charAt(0).toUpperCase() + name.slice(1)
        } to comparison. The comparison section is full.`
      )
  }

  return (
    <AnimationHoverWrapper>
      <button
        className={`mr-2 transition ${isInComparison ? 'text-blue-500' : isComparisonFull ? 'text-gray-300' : ''} hover:text-blue-700`}
        onClick={(e) => handleCompareClick(e)}>
        <FaBalanceScaleRight />
      </button>
    </AnimationHoverWrapper>
  )
}
