import { useDispatch, useSelector } from 'react-redux'
import { PokemonList } from '../components/PokemonList'
import { AppDispatch, RootState } from '../store/store'
import { getInitialPokemonList } from '../store/pokemonListSlice'
import { useEffect } from 'react'
import { PokemonPagination } from '../components/PokemonPagination'
import { Error } from '../components/Error'
import { Spinner } from '../components/Spinner'

export const PokemonMainList = () => {
  const isLoading = useSelector((state: RootState) => state.pokemonList.isLoading)
  const error = useSelector((state: RootState) => state.pokemonList.error)
  const pokemonMainItems = useSelector((state: RootState) => state.pokemonList.list)

  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(getInitialPokemonList())
  }, [dispatch])

  return (
    <div className="w-xs md:w-2xl xl:w-5xl">
      {isLoading ? (
        <Spinner />
      ) : error ? (
        <Error error={error} />
      ) : (
        <>
          <PokemonList pokemonList={pokemonMainItems} />
          <PokemonPagination />
        </>
      )}
    </div>
  )
}
