import { Header } from './components/Header'
import './index.css'
import { PokemonDetails } from './screens/PokemonDetails'
// import { PokemonList } from './screens/PokemonList'

export const App = () => {
  return (
    <>
      <Header />
      {/* <PokemonList /> */}
      <PokemonDetails />
    </>
  )
}
