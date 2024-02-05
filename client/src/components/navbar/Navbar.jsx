import { Link } from "react-router-dom";
import Logo from "../../assets/kajutan.svg";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container px-5 mx-auto flex gap-x-4 justify-between items-center py-4">
      <div className="w-8 text-white relative">
        {isOpen ? (
          <XMarkIcon onClick={() => setIsOpen(false)} />
        ) : (
          <Bars3Icon onClick={() => setIsOpen(true)} />
        )}

        <div
          className={`${
            isOpen ? "" : "hidden"
          } absolute bg-k-lightBrown left-0 w-32 z-20 rounded-md`}
        >
          <ul className="flex flex-col sm:text-lg text-white divide-y">
            <li className="hover:text-k-brown p-2">
              <Link>Hem</Link>
            </li>
            <li className="hover:text-k-brown p-2">
              <Link>Om Kajutan</Link>
            </li>
            <li className="hover:text-k-brown p-2">
              <Link>Kontakta oss</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-1/3">
        <img src={Logo} alt="logo" />
      </div>
      <div className="w-8 text-white opacity-0">
        <Bars3Icon />
      </div>
    </div>
  );
}
