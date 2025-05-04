import { PokemonList } from '../components/PokemonList'

const mockData = [
  {
    name: 'bulbasaur',
    index: '1'
  },
  {
    name: 'charmander',
    index: '4'
  },
  {
    name: 'charizard',
    index: '6'
  },
  {
    name: 'squirtle',
    index: '7'
  },
  {
    name: 'blastoise',
    index: '9'
  }
]

export const PokemonFavoriteList = () => {
  const pokemonFavItems = mockData

  return <PokemonList pokemonList={pokemonFavItems} />
}
