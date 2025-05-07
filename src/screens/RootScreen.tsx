import { Outlet } from 'react-router-dom'
import { Header } from '../components/Header'

export const RootScreen = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex justify-center flex-grow items-start bg-sky-200 rounded-t-xl p-4">
        <Outlet />
      </div>
    </div>
  )
}
