import { useNavigate, useRouteError } from 'react-router-dom'
import { Header } from '../components/Header'
import { FaArrowCircleLeft } from 'react-icons/fa'

export const ErrorScreen = () => {
  const navigate = useNavigate()
  const error = useRouteError()
  console.error(error)

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex justify-center flex-grow items-start bg-sky-200 rounded-t-xl p-4">
        <div className="justify-center">
          <h2 className="p-2">Ops! Something went wrong!</h2>

          <button
            className="pt-2 pb-2 bg-amber-200 transition hover:bg-amber-400 hover:shadow-xl"
            onClick={() => {
              navigate(-1)
            }}>
            Go back on previous page <FaArrowCircleLeft className="inline" />
          </button>
        </div>
      </div>
    </div>
  )
}
