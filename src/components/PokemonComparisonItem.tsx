import { PokemonData } from '../types'
import { stylizeIndex } from '../utils'
import { AnimationEnterWrapper } from './AnimationEnterWrapper'
import { ButtonRemove } from './ButtonRemove'
import { PokemonStat } from './PokemonStat'

interface PokemonComparisonItemProps {
  comparedPokemons: PokemonData[]
  pokemonToRender: number
}

interface PokemonStatComparisonProps {
  stat: string
  pokemonToRenderValue: number
  comparedToValue: number
}

export const PokemonComparisonItem = ({
  comparedPokemons,
  pokemonToRender
}: PokemonComparisonItemProps) => {
  const comparedTo = pokemonToRender ? 0 : 1

  return (
    <AnimationEnterWrapper>
      <div className="bg-amber-100 rounded-xl pb-1 md:shadow-sm">
        <div className="flex justify-between p-2">
          <h2 className="ml-2 text-xl md:text-2xl">
            {stylizeIndex(Number(comparedPokemons[pokemonToRender].index))}
            {' - '}
            <span className="capitalize">{comparedPokemons[pokemonToRender].name}</span>
          </h2>

          <div className="flex justify-end pl-2">
            <ButtonRemove
              name={comparedPokemons[pokemonToRender].name}
              index={comparedPokemons[pokemonToRender].index}
            />
          </div>
        </div>

        <img
          className="w-xs"
          src={comparedPokemons[pokemonToRender].img}
          alt={comparedPokemons[pokemonToRender].name}
        />

        <PokemonStatComparison
          stat="height"
          pokemonToRenderValue={comparedPokemons[pokemonToRender].height}
          comparedToValue={comparedPokemons[comparedTo]?.height || 0}
        />

        <PokemonStatComparison
          stat="weight"
          pokemonToRenderValue={comparedPokemons[pokemonToRender].weight}
          comparedToValue={comparedPokemons[comparedTo]?.weight || 0}
        />

        {comparedPokemons[pokemonToRender]?.stats.map((stat) => (
          <PokemonStatComparison
            key={`${stat.name}${stat.value}`}
            stat={stat.name}
            pokemonToRenderValue={stat.value}
            comparedToValue={
              comparedPokemons[comparedTo]?.stats.find((item) => item.name === stat.name)?.value ||
              0
            }
          />
        ))}
      </div>
    </AnimationEnterWrapper>
  )
}

const PokemonStatComparison = ({
  stat,
  pokemonToRenderValue,
  comparedToValue
}: PokemonStatComparisonProps) => {
  const isGreater = pokemonToRenderValue >= comparedToValue

  return (
    <div
      className={`grid grid-cols-1 ${isGreater ? 'bg-green-200' : 'bg-amber-200'} rounded-xl ml-1 mr-1 mb-4 p-2 md:ml-4 md:mr-4 md:shadow-sm`}>
      <PokemonStat name={stat} value={pokemonToRenderValue} />
    </div>
  )
}
