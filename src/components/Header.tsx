import { NavLink } from 'react-router-dom'

export const Header = () => {
  const navLinkStyles = `pt-2 pb-2 transition hover:bg-amber-400 hover:shadow-xl`

  return (
    <header className="flex justify-between pt-8 pb-8 pr-4 pl-4 md:p-10">
      <NavLink to="/">
        <h1>React_Pokemon</h1>
      </NavLink>
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
