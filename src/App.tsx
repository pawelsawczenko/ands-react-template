import { Header } from './components/Header'
import './index.css'
import { PokemonDetails } from './screens/PokemonDetails'
// import { PokemonList } from './screens/PokemonList'

export const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      {/* <PokemonList /> */}
      <PokemonDetails />
    </div>
  )
}
