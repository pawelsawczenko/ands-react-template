export const Header = () => {
  return (
    <header className="flex justify-between p-10">
      <h1 className="p-2">React_Pokemon</h1>
      <div>
        <button className="mr-3 pt-2 pb-2 transition bg-amber-200 hover:bg-amber-400 hover:shadow-xl">
          Favorites
        </button>
        <button className="pt-2 pb-2 transition bg-amber-200 hover:bg-amber-400 hover:shadow-xl">
          Comparison
        </button>
      </div>
    </header>
  )
}
