import { PokemonItemProps } from '../types'
import { ButtonFavorite } from './ButtonFavorite'
import { ButtonCompare } from './ButtonCompare'

export const PokemonItem = ({ name, index }: PokemonItemProps) => {
  const pokemonIndex = index < 10 ? `#00${index}` : `#0${index}`

  const handleItemClick = () => {
    console.log(`${pokemonIndex} - ${name}`)
  }

  return (
    <div
      className="w-xs mb-4 bg-amber-100 shadow-sm transition hover:bg-amber-200 hover:shadow-xl cursor-pointer"
      onClick={handleItemClick}>
      <div className="flex justify-end p-2">
        <ButtonFavorite name={name} index={index} />

        <ButtonCompare name={name} index={index} />
      </div>
      <div className="p-2">
        <h2>{pokemonIndex}</h2>

        <h2 className="capitalize">{name}</h2>
      </div>
    </div>
  )
}
