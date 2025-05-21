import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../store/store'
import { getPokemonListPage } from '../store/pokemonListSlice'

export const PokemonPagination = () => {
  const previousPageUrl = useSelector((state: RootState) => state.pokemonList.pagination.previous)
  const nextPageUrl = useSelector((state: RootState) => state.pokemonList.pagination.next)
  const currentPage = useSelector((state: RootState) => state.pokemonList.pagination.currentPage)
  const pokemonsCount = useSelector(
    (state: RootState) => state.pokemonList.pagination.pokemonsCount
  )
  const dispatch = useDispatch<AppDispatch>()

  const pagesAmount = Math.ceil(pokemonsCount / 20)

  const handlePrevClick = () => {
    if (!previousPageUrl) return
    dispatch(getPokemonListPage({ url: previousPageUrl, actionType: 'previous' }))
  }

  const handleNextClick = () => {
    if (!nextPageUrl) return
    dispatch(getPokemonListPage({ url: nextPageUrl, actionType: 'next' }))
  }

  return (
    <div className="flex justify-center">
      <button
        className={`p-2 transition ${!previousPageUrl ? 'bg-gray-200' : 'bg-amber-200 hover:bg-amber-400'}`}
        onClick={handlePrevClick}
        disabled={!previousPageUrl}>
        Prev
      </button>
      <p className="p-2 ml-2 mr-2 bg-amber-100">
        {currentPage} &#47; <span>{pagesAmount}</span>
      </p>
      <button
        className={`p-2 transition ${!nextPageUrl ? 'bg-gray-200' : 'bg-amber-200 hover:bg-amber-400'}`}
        onClick={handleNextClick}
        disabled={!nextPageUrl}>
        Next
      </button>
    </div>
  )
}
