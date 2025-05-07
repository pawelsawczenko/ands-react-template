import { useParams } from 'react-router-dom'
import { ButtonCompare } from '../components/ButtonCompare'
import { ButtonFavorite } from '../components/ButtonFavorite'
import { PokemonStat } from '../components/PokemonStat'
import { PokemonData } from '../types'

const mockData: PokemonData = {
  index: '7',
  name: 'squirtle',
  height: 5,
  weight: 90,
  img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png',
  stats: [
    { name: 'hp', value: 44 },
    { name: 'attack', value: 48 },
    { name: 'defense', value: 65 },
    { name: 'special-attack', value: 50 },
    { name: 'special-defense', value: 64 },
    { name: 'speed', value: 43 }
  ]
}

export const PokemonDetails = () => {
  const { pokemonId } = useParams()
  console.log(`index of pokemon -> ` + pokemonId)

  const { index, name, height, weight, img, stats } = mockData

  const pokemonIndex = Number(index) < 10 ? `#00${index}` : `#0${index}`

  return (
    <div className="flex justify-center flex-col bg-amber-100  rounded-xl w-xs md:w-2xl">
      <div className="flex justify-between p-2">
        <h2 className="ml-2 text-xl md:text-3xl">
          {pokemonIndex}
          {' - '}
          <span className="capitalize">{name}</span>
        </h2>

        <div className="flex justify-end pl-2">
          <ButtonFavorite name={name} index={index} />

          <ButtonCompare name={name} index={index} />
        </div>
      </div>

      <div className="flex justify-center flex-wrap md:justify-between md:p-2">
        <img className="w-xs" src={img} alt={name} />

        <div>
          <div className="grid grid-cols-2 w-2xs bg-green-200 rounded-xl md:w-xs mb-4 p-2 md:shadow-sm">
            <PokemonStat name="Height" value={height} />

            <PokemonStat name="Weight" value={weight} />
          </div>

          <div className="grid grid-cols-2 w-2xs bg-red-200 rounded-xl mb-2 p-2 md:w-xs md:shadow-sm">
            {stats.map((stat) => (
              <PokemonStat key={`${stat.name}-${stat.value}`} name={stat.name} value={stat.value} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
