import { PokemonItemProps } from '../types'
import { ButtonFavorite } from './ButtonFavorite'
import { ButtonCompare } from './ButtonCompare'
import { useNavigate } from 'react-router-dom'

import { stylizeIndex } from '../utils'
import { AnimationEnterWrapper } from './AnimationEnterWrapper'
import { AnimationHoverWrapper } from './AnimationHoverWrapper'

export const PokemonItem = ({ name, index }: PokemonItemProps) => {
  const navigate = useNavigate()
  const pokemonIndex = stylizeIndex(Number(index))

  const handleItemClick = () => {
    navigate(`/details/${index}`)
  }

  return (
    <AnimationEnterWrapper>
      <AnimationHoverWrapper isTapable={false}>
        <div
          className="w-xs relative bg-amber-100 shadow-sm transition hover:bg-amber-200 hover:shadow-xl cursor-pointer"
          onClick={handleItemClick}>
          <div className="flex justify-end p-2">
            <ButtonFavorite name={name} index={index} />

            <ButtonCompare name={name} index={index} />
          </div>
          <div className="absolute w-24 top-1 left-28">
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index}.png`}
              alt={name}
            />
          </div>
          <div className="p-2">
            <h2>{pokemonIndex}</h2>

            <h2 className="capitalize">{name}</h2>
          </div>
        </div>
      </AnimationHoverWrapper>
    </AnimationEnterWrapper>
  )
}
