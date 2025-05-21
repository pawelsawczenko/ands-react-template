export const EmptySection = ({ message = 'The section is empty' }: { message: string }) => {
  return (
    <div className="flex justify-around w-xs md:w-2xl">
      <div className="bg-amber-100 rounded-xl p-4">
        <p>{message}</p>
      </div>
    </div>
  )
}
