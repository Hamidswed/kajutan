import { ArrowLeftIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="text-white flex flex-col items-center gap-y-2 mt-40">
      <h1>Det finns ingen sida!</h1>
      <Link to="/" className="flex items-center gap-x-2 text-k-lightBrown">
        <ArrowLeftIcon className="w-5 h-5" />
        <span>Tillbaka</span>
      </Link>
    </div>
  );
}
