import { useDispatch } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppDispatch } from '../store/store'
import { getInitialPokemonList } from '../store/pokemonListSlice'

export const Header = () => {
  const hoverStyles = `transition hover:bg-amber-400 hover:shadow-xl`
  const navLinkStyles = `pt-2 pb-2 ${hoverStyles}`
  const navigate = useNavigate()

  const dispatch = useDispatch<AppDispatch>()

  const handleLogoClick = () => {
    dispatch(getInitialPokemonList())
    navigate('/')
  }

  return (
    <header className="flex justify-between pt-8 pb-8 pr-4 pl-4 md:p-10">
      <button className={hoverStyles} onClick={handleLogoClick}>
        <h1>React_Pok&eacute;mon</h1>
      </button>
      <div>
        <NavLink
          to="/favorites"
          className={({ isActive }) =>
            `${isActive ? 'bg-amber-400' : 'bg-amber-200'} mr-3 ${navLinkStyles}`
          }>
          Favorites
        </NavLink>
        <NavLink
          to="/comparison"
          className={({ isActive }) =>
            `${isActive ? 'bg-amber-400' : 'bg-amber-200'} ${navLinkStyles}`
          }>
          Comparison
        </NavLink>
      </div>
    </header>
  )
}
