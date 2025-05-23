import { useDispatch, useSelector } from 'react-redux'
import { PokemonList } from '../components/PokemonList'
import { AppDispatch, RootState } from '../store/store'
import { setInitialPage } from '../store/pokemonListSlice'
import { useEffect } from 'react'
import { PokemonPagination } from '../components/PokemonPagination'
import { Error } from '../components/Error'
import { Spinner } from '../components/Spinner'
import { useGetPokemonInitialListQuery } from '../services'

export const PokemonMainList = () => {
  const isLoadingState = useSelector((state: RootState) => state.pokemonList.isLoading)
  const errorState = useSelector((state: RootState) => state.pokemonList.error)
  const currnetPage = useSelector((state: RootState) => state.pokemonList.pagination.currentPage)
  const pokemonMainItems = useSelector((state: RootState) => state.pokemonList.list)

  const { data, isSuccess, isLoading, isError } = useGetPokemonInitialListQuery()

  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    if (currnetPage) return
    if (isSuccess && data) dispatch(setInitialPage(data))
  }, [dispatch, currnetPage, data, isSuccess])

  return isLoading || isLoadingState ? (
    <Spinner />
  ) : isError || errorState ? (
    <Error error={errorState || 'Something went wrong when fething page'} />
  ) : (
    <div className="w-xs md:w-2xl xl:w-5xl">
      <PokemonList pokemonList={pokemonMainItems} />
      <PokemonPagination />
    </div>
  )
}
