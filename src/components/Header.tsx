import { useDispatch } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppDispatch } from '../store/store'
import { getInitialPokemonList } from '../store/pokemonListSlice'
import { AnimationHoverWrapper } from './AnimationHoverWrapper'
import pokeball from '../assets/pokeball.svg'

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
      <AnimationHoverWrapper>
        <button className={hoverStyles} onClick={handleLogoClick}>
          <h1>
            React
            <img className="inline-block w-4 mb-1 ml-1 mr-1" src={pokeball} alt="pokeball" />
            Pok&eacute;mon
          </h1>
        </button>
      </AnimationHoverWrapper>
      <div>
        <div className="inline-block">
          <AnimationHoverWrapper>
            <NavLink
              to="/favorites"
              className={({ isActive }) =>
                `${isActive ? 'bg-amber-400' : 'bg-amber-200'} mr-3 ${navLinkStyles}`
              }>
              Favorites
            </NavLink>
          </AnimationHoverWrapper>
        </div>
        <div className="inline-block">
          <AnimationHoverWrapper>
            <NavLink
              to="/comparison"
              className={({ isActive }) =>
                `${isActive ? 'bg-amber-400' : 'bg-amber-200'} ${navLinkStyles}`
              }>
              Comparison
            </NavLink>
          </AnimationHoverWrapper>
        </div>
      </div>
    </header>
  )
}
