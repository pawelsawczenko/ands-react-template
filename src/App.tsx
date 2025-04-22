import { Header } from './components/Header'
import './index.css'
import { PokemonList } from './screens/PokemonList'

export const App = () => {
  return (
    <>
      <Header />
      <PokemonList />
    </>
  )
}
