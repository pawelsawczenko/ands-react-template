import { PokemonComparisonItem } from '../components/PokemonComparisonItem'
import { PokemonData } from '../types'

const mockData: {
  pokemonLeft: PokemonData
  pokemonRight: PokemonData
} = {
  pokemonLeft: {
    index: '4',
    name: 'charmander',
    height: 6,
    weight: 85,
    img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
    stats: [
      { name: 'hp', value: 39 },
      { name: 'attack', value: 52 },
      { name: 'defense', value: 43 },
      { name: 'special-attack', value: 60 },
      { name: 'special-defense', value: 50 },
      { name: 'speed', value: 65 }
    ]
  },
  pokemonRight: {
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
}

export const PokemonComparison = () => {
  const comparedPokemons = mockData

  return (
    <div className="grid grid-cols-2 bg-amber-100  rounded-xl w-xs md:w-2xl">
      <PokemonComparisonItem comparedPokemons={comparedPokemons} pokemonToRender="pokemonLeft" />
      <PokemonComparisonItem comparedPokemons={comparedPokemons} pokemonToRender="pokemonRight" />
    </div>
  )
}
