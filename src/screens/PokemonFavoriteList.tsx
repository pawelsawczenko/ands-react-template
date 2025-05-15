import { PokemonList } from '../components/PokemonList'

const mockData = [
  {
    name: 'bulbasaur',
    url: 'https://pokeapi.co/api/v2/pokemon/1/'
  },
  {
    name: 'charmander',
    url: 'https://pokeapi.co/api/v2/pokemon/4/'
  },
  {
    name: 'charizard',
    url: 'https://pokeapi.co/api/v2/pokemon/6/'
  },
  {
    name: 'squirtle',
    url: 'https://pokeapi.co/api/v2/pokemon/7/'
  },
  {
    name: 'blastoise',
    url: 'https://pokeapi.co/api/v2/pokemon/9/'
  }
]

export const PokemonFavoriteList = () => {
  const pokemonFavItems = mockData

  return (
    <div className="w-xs md:w-2xl xl:w-5xl">
      <PokemonList pokemonList={pokemonFavItems} />
    </div>
  )
}
