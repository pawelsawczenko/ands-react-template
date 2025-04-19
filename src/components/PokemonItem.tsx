import { FaRegStar, FaBalanceScaleRight } from 'react-icons/fa'

interface PokemonItemProps {
  name: string
  index: number
}

export const PokemonItem = ({ name, index }: PokemonItemProps) => {
  const pokemonIndex = index < 10 ? `#00${index}` : `#0${index}`

  const handleItemClick = () => {
    console.log(`${pokemonIndex} - ${name}`)
  }

  const handleFavClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation()
    console.log(`fav ${pokemonIndex} - ${name}`)
  }

  const handleCompareClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation()
    console.log(`compare ${pokemonIndex} - ${name}`)
  }

  return (
    <div
      className="w-xs mb-4 bg-amber-100 shadow-sm transition hover:bg-amber-200 hover:shadow-xl cursor-pointer"
      onClick={handleItemClick}>
      <div className="flex justify-end p-2">
        <button className="mr-2 transition hover:text-red-800" onClick={(e) => handleFavClick(e)}>
          {/* <FaStar /> */}
          <FaRegStar />
        </button>

        <button
          className="mr-2 transition hover:text-blue-700"
          onClick={(e) => handleCompareClick(e)}>
          <FaBalanceScaleRight />
        </button>
      </div>
      <div className="p-2">
        <h2>{pokemonIndex}</h2>

        <h2 className="capitalize">{name}</h2>
      </div>
    </div>
  )
}
