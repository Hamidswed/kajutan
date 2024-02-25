import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/16/solid";

export function Search({ searchItem, setSearchItem }) {
  return (
    <div className="flex justify-between items-center mb-4 border-b border-k-xlightBrown p-2 text-k-xlightBrown lg:max-w-screen-lg">
      <div className="w-full">
        <input
          type="text"
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
          placeholder="Sök t ex Calzone..."
          className="bg-transparent outline-none placeholder-k-brown placeholder-opacity-50 w-full"
        />
      </div>
      <button className="w-5 h-5">
        {searchItem === "" ? (
          <MagnifyingGlassIcon className="w-full text-k-xlightBrown hover:text-white transition-all duration-300 hover:scale-125" />
        ) : (
          <XMarkIcon
            onClick={() => setSearchItem("")}
            className="w-full text-k-xlightBrown hover:text-white transition-all duration-300 hover:scale-125"
          />
        )}
      </button>
    </div>
  );
}
