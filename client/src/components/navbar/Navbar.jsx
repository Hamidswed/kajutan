import { Link } from "react-router-dom";
import Logo1 from "../../assets/logo/kajutan1.svg";
import Logo2 from "../../assets/logo/kajutan2.svg";
import Logo3 from "../../assets/logo/kajutan3.svg";
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
          } absolute bg-white left-0 w-32 z-20 rounded-md`}
        >
          <ul className="flex flex-col sm:text-lg text-neutral-500 divide-y">
            <li
              className="hover:text-k-brown p-2"
              onClick={() => setIsOpen(false)}
            >
              <Link to="/">Hem</Link>
            </li>
            <li
              className="hover:text-k-brown p-2"
              onClick={() => setIsOpen(false)}
            >
              <Link to="/menu">Menu</Link>
            </li>
            <li
              className="hover:text-k-brown p-2"
              onClick={() => setIsOpen(false)}
            >
              <Link>Om Kajutan</Link>
            </li>
            <li
              className="hover:text-k-brown p-2"
              onClick={() => setIsOpen(false)}
            >
              <Link>Kontakta oss</Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="w-1/3 relative top-0">
        <img className="absolute" src={Logo1} alt="logo" />
        <img className="absolute animate-spinSlow" src={Logo2} alt="logo" />
        <img className="absolute animate-wave" src={Logo3} alt="logo" />
      </div>
      <div className="w-8 text-white opacity-0">
        <Bars3Icon />
      </div>
    </div>
  );
}
