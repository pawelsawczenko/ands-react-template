import { Provider } from 'react-redux'
import './index.css'
import { RootNavigation } from './navigation/RootNavigation'
import { store } from './store/store'

export const App = () => {
  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  )
}
