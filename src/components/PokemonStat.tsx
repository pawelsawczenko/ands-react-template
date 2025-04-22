interface PokemonStatProps {
  name: string
  value: number
}

export const PokemonStat = ({ name, value }: PokemonStatProps) => {
  return (
    <div className="p-2">
      <p className="capitalize text-grey-200">{name}</p>
      <p>{value}</p>
    </div>
  )
}
