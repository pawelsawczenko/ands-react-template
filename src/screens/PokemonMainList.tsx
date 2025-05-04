import { PokemonList } from '../components/PokemonList'

const mockData = [
  {
    name: 'bulbasaur',
    index: '1'
  },
  {
    name: 'ivysaur',
    index: '2'
  },
  {
    name: 'venusaur',
    index: '3'
  },
  {
    name: 'charmander',
    index: '4'
  },
  {
    name: 'charmeleon',
    index: '5'
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
    name: 'wartortle',
    index: '8'
  },
  {
    name: 'blastoise',
    index: '9'
  },
  {
    name: 'caterpie',
    index: '10'
  },
  {
    name: 'metapod',
    index: '11'
  },
  {
    name: 'butterfree',
    index: '12'
  }
]

export const PokemonMainList = () => {
  const pokemonMainItems = mockData

  return <PokemonList pokemonList={pokemonMainItems} />
}
