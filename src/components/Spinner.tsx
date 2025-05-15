export const Spinner = () => {
  return (
    <div className="flex justify-center flex-grow items-start p-4">
      <div className="justify-center">
        <span className="relative flex size-15">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber-100 opacity-75"></span>
          <span className="relative inline-flex size-15 rounded-full bg-amber-200"></span>
        </span>
      </div>
    </div>
  )
}
