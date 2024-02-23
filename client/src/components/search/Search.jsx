import { useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";

export function Search({ searchItem, setSearchItem }) {
  return (
    <div className="flex justify-between items-center mb-4 border-b border-k-xlightBrown p-2 text-k-xlightBrown ">
      <div className="">
        <input
          type="text"
          value={searchItem}
          onChange={(e) => setSearchItem(e.target.value)}
          placeholder="MARGHERITA..."
          className="bg-transparent outline-none placeholder-k-brown placeholder-opacity-50"
        />
      </div>
      <button className="w-5 h-5">
        <MagnifyingGlassIcon className="text-k-xlightBrown hover:text-white transition-all duration-300 hover:scale-125" />
      </button>
    </div>
  );
}
