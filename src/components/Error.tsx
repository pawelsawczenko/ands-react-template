export const Error = ({ error }: { error: string }) => {
  console.error(error)

  return (
    <div className="w-xs md:w-2xl xl:w-5xl">
      <div className="flex justify-center flex-grow items-start bg-red-200 rounded-xl p-4">
        <div className="justify-center">
          <h2 className="p-2">Ops! Something went wrong!</h2>

          <p className="p-2">An error has occured: {error}</p>
        </div>
      </div>
    </div>
  )
}
