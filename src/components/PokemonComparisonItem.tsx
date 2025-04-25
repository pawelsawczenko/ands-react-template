import { PokemonData } from '../types'
import { ButtonRemove } from './ButtonRemove'
import { PokemonStat } from './PokemonStat'

interface PokemonComparisonItemProps {
  comparedPokemons: {
    pokemonLeft: PokemonData
    pokemonRight: PokemonData
  }
  pokemonToRender: 'pokemonLeft' | 'pokemonRight'
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
  const comparedTo = pokemonToRender === 'pokemonLeft' ? 'pokemonRight' : 'pokemonLeft'

  return (
    <div>
      <div className="flex justify-between p-2">
        <h2 className="ml-2 text-xl md:text-3xl">
          {comparedPokemons[pokemonToRender].index}
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
        comparedToValue={comparedPokemons[comparedTo].height}
      />

      <PokemonStatComparison
        stat="weight"
        pokemonToRenderValue={comparedPokemons[pokemonToRender].weight}
        comparedToValue={comparedPokemons[comparedTo].weight}
      />

      {comparedPokemons[pokemonToRender].stats.map((stat) => (
        <PokemonStatComparison
          stat={stat.name}
          pokemonToRenderValue={stat.value}
          comparedToValue={
            comparedPokemons[comparedTo].stats.find((item) => item.name === stat.name)?.value || 0
          }
        />
      ))}
    </div>
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
      className={`grid grid-cols-1 ${isGreater ? 'bg-green-200' : 'bg-amber-200'} rounded-xl mb-4 p-2 md:shadow-sm`}>
      <PokemonStat name={stat} value={pokemonToRenderValue} />
    </div>
  )
}
