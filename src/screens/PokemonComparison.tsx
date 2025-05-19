import { useDispatch, useSelector } from 'react-redux'
import { PokemonComparisonItem } from '../components/PokemonComparisonItem'
// import { PokemonData } from '../types'
import { AppDispatch, RootState } from '../store/store'
import { Error } from '../components/Error'
import { Spinner } from '../components/Spinner'
import { useEffect } from 'react'
import { getPokemonComparisonDetails } from '../store/pokemonComparisonSlice'

// const mockData: {
//   pokemonLeft: PokemonData
//   pokemonRight: PokemonData
// } = {
//   pokemonLeft: {
//     index: '4',
//     name: 'charmander',
//     height: 6,
//     weight: 85,
//     img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
//     stats: [
//       { name: 'hp', value: 39 },
//       { name: 'attack', value: 52 },
//       { name: 'defense', value: 43 },
//       { name: 'special-attack', value: 60 },
//       { name: 'special-defense', value: 50 },
//       { name: 'speed', value: 65 }
//     ]
//   },
//   pokemonRight: {
//     index: '7',
//     name: 'squirtle',
//     height: 5,
//     weight: 90,
//     img: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png',
//     stats: [
//       { name: 'hp', value: 44 },
//       { name: 'attack', value: 48 },
//       { name: 'defense', value: 65 },
//       { name: 'special-attack', value: 50 },
//       { name: 'special-defense', value: 64 },
//       { name: 'speed', value: 43 }
//     ]
//   }
// }

export const PokemonComparison = () => {
  const isLoading = useSelector((state: RootState) => state.pokemonComparison.isLoading)
  const error = useSelector((state: RootState) => state.pokemonComparison.error)
  const { comparedPokemonsIndexes, comparedPokemons } = useSelector(
    (state: RootState) => state.pokemonComparison
  )

  const dispatch = useDispatch<AppDispatch>()

  const isPokemonInComparisonData =
    comparedPokemons[0]?.index === comparedPokemonsIndexes[0] &&
    comparedPokemons[1]?.index === comparedPokemonsIndexes[1]

  useEffect(() => {
    if (!isPokemonInComparisonData && comparedPokemonsIndexes.length)
      dispatch(getPokemonComparisonDetails({ ids: comparedPokemonsIndexes }))
  }, [dispatch, comparedPokemonsIndexes, isPokemonInComparisonData])

  return (
    <>
      {isLoading ? (
        <div className="w-xs md:w-2xl xl:w-5xl">
          <Spinner />
        </div>
      ) : error ? (
        <div className="w-xs md:w-2xl xl:w-5xl">
          <Error error={error} />
        </div>
      ) : (
        <div className="grid grid-cols-2 bg-amber-100  rounded-xl w-xs md:w-2xl">
          {comparedPokemons.length < 3 && comparedPokemons.length !== 0 ? (
            comparedPokemons.map((_, index) => (
              <PokemonComparisonItem
                key={`${comparedPokemons[index].index}-${comparedPokemons[index].name}`}
                comparedPokemons={comparedPokemons}
                pokemonToRender={index}
              />
            ))
          ) : (
            <div className="flex justify-around w-xs p-2">
              <p>Try add more pokemons to comparison</p>
            </div>
          )}
          {/* <PokemonComparisonItem comparedPokemons={comparedPokemons} pokemonToRender={0} />
          <PokemonComparisonItem comparedPokemons={comparedPokemons} pokemonToRender={1} /> */}
        </div>
      )}
    </>
  )
}
