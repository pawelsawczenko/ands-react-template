import { PokemonItem } from '../components/PokemonItem'
import { PokemonPagination } from '../components/PokemonPagination'

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

export const PokemonList = () => {
  const pokemonItems = mockData

  return (
    <div className="flex justify-center bg-sky-200 rounded-t-xl p-4">
      <div className="w-xs md:w-2xl xl:w-5xl">
        <div className="flex flex-row flex-wrap justify-between">
          {pokemonItems.map((item) => (
            <PokemonItem
              key={`${item.index}-${item.name}`}
              name={item.name}
              index={Number(item.index)}
            />
          ))}
        </div>
        <PokemonPagination />
      </div>
    </div>
  )
}
