import { useDispatch, useSelector } from 'react-redux'
import { ButtonCompare } from '../components/ButtonCompare'
import { ButtonFavorite } from '../components/ButtonFavorite'
import { PokemonStat } from '../components/PokemonStat'
import { stylizeIndex } from '../utils'
import { AppDispatch, RootState } from '../store/store'
import { useEffect } from 'react'
import { getPokemonDetails } from '../store/pokemonDetailsSlice'
import { Error } from '../components/Error'
import { Spinner } from '../components/Spinner'
import { useParams } from 'react-router'
import { AnimationEnterWrapper } from '../components/AnimationEnterWrapper'

export const PokemonDetails = () => {
  const { pokemonId } = useParams()

  const isLoading = useSelector((state: RootState) => state.pokemonDetails.isLoading)
  const error = useSelector((state: RootState) => state.pokemonDetails.error)
  const { index, name, height, weight, img, stats } = useSelector(
    (state: RootState) => state.pokemonDetails.details
  )

  const dispatch = useDispatch<AppDispatch>()

  const pokemonIndex = stylizeIndex(Number(index))

  useEffect(() => {
    if (!pokemonId) return
    dispatch(getPokemonDetails({ id: pokemonId }))
  }, [dispatch, pokemonId])

  return isLoading ? (
    <Spinner />
  ) : error ? (
    <Error error={error} />
  ) : (
    <AnimationEnterWrapper>
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
          <img className="w-xs" src={img ? img : undefined} alt={name} />

          <div className="md:mr-2">
            <div className="grid grid-cols-2 w-2xs bg-green-200 rounded-xl md:w-xs mb-4 p-2 md:shadow-sm">
              <PokemonStat name="Height" value={height} />

              <PokemonStat name="Weight" value={weight} />
            </div>

            <div className="grid grid-cols-2 w-2xs bg-red-200 rounded-xl mb-2 p-2 md:w-xs md:shadow-sm">
              {stats.map((stat) => (
                <PokemonStat
                  key={`${stat.name}-${stat.value}`}
                  name={stat.name}
                  value={stat.value}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </AnimationEnterWrapper>
  )
}
