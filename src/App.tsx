import { Provider } from 'react-redux'
import './index.css'
import { RootNavigation } from './navigation/RootNavigation'
import { store } from './store/store'
import { Toaster } from 'react-hot-toast'

export const App = () => {
  return (
    <Provider store={store}>
      <RootNavigation />
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: '8px' }}
        toastOptions={{
          error: { duration: 3000 },
          style: {
            fontSize: '1rem',
            maxWidth: '40rem',
            padding: '1rem 1.5rem',
            backgroundColor: 'lightgray',
            color: 'black',
            border: '1px solid red'
          }
        }}
      />
    </Provider>
  )
}
