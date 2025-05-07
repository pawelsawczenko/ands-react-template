import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ErrorScreen } from '../screens/ErrorScreen'
import { RootScreen } from '../screens/RootScreen'
import { PokemonMainList } from '../screens/PokemonMainList'
import { PokemonDetails } from '../screens/PokemonDetails'
import { PokemonComparison } from '../screens/PokemonComparison'
import { PokemonFavoriteList } from '../screens/PokemonFavoriteList'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootScreen />,
    errorElement: <ErrorScreen />,
    children: [
      {
        index: true,
        element: <PokemonMainList />
      },
      {
        path: 'favorites',
        element: <PokemonFavoriteList />
      },
      {
        path: 'comparison',
        element: <PokemonComparison />
      },
      {
        path: 'details/:pokemonId',
        element: <PokemonDetails />
      }
    ]
  }
])

export const RootNavigation = () => {
  return <RouterProvider router={router} />
}
