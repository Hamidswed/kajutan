import { Link } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/16/solid";
import { UserIcon } from "@heroicons/react/16/solid";
import { useState } from "react";
import { Logo } from "./Logo";
import useGetTokenFromLS from "../../util/getToken";
import BarMenu from "./BarMenu";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const { value } = useGetTokenFromLS();

  return (
    <div className="container px-5 mx-auto flex gap-x-4 justify-between items-center mt-8">
      {/* backdrop */}
      <div
        onClick={() => setIsOpen(false)}
        className={`${
          isOpen ? "" : "hidden"
        } backdrop-blur-sm w-full h-screen fixed bg-neutral-700/20 top-0 left-0 right-0 z-20`}
      ></div>

      {/* bars icon */}

      <BarMenu isOpen={isOpen} setIsOpen={setIsOpen} value={value} />

      {/* menu left in desktop */}
      <div className="hidden md:block flex-1 translate-y-8">
        <ul className="flex justify-end gap-x-4 text-white items-center">
          <li
            className={`hover:bg-k-lightBrown p-2 bg-k-brown rounded-full text-sm
            }`}
          >
            <Link to="/admin" className="flex items-center gap-x-2">
              <UserIcon className="w-4" />
            </Link>
          </li>
          <li className="hover:text-k-brown p-2 flex items-center">
            <Link to="/">Hem</Link>
          </li>
          <li className="hover:text-k-brown p-2">
            <Link to="/about">Om Kajutan</Link>
          </li>
        </ul>
      </div>
      {/* logo */}
      <Link
        to="/"
        className="w-1/3 relative -top-2 min-[580px]:w-[30%] sm:w-[28%] md:w-[17%] md:-top-7 lg:w-[12%]"
      >
        <Logo />
      </Link>

      {/* menu bars icon */}
      <div className="w-8 text-white opacity-0 md:hidden">
        <Bars3Icon />
      </div>

      {/* menu right in desktop */}
      <div className="hidden md:block flex-1 translate-y-8 ">
        <ul className="flex justify-start gap-x-4 text-white">
          <li className="hover:text-k-brown p-2">
            <Link to="/menu">Meny</Link>
          </li>
          <li className="hover:text-k-brown p-2">
            <Link to="/contact">Kontakta oss</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
