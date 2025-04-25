import { Header } from './components/Header'
import './index.css'
import { PokemonComparison } from './screens/PokemonComparison'
// import { PokemonFavoriteList } from './screens/PokemonFavoriteList'
// import { PokemonDetails } from './screens/PokemonDetails'
// import { PokemonMainList } from './screens/PokemonMainList'

export const App = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex justify-center flex-grow items-start bg-sky-200 rounded-t-xl p-4">
        {/* <PokemonMainList /> */}
        {/* <PokemonFavoriteList /> */}
        <PokemonComparison />
        {/* <PokemonDetails /> */}
      </div>
    </div>
  )
}
