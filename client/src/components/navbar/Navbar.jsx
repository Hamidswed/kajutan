import { Link } from "react-router-dom";
import Logo1 from "../../assets/logo/kajutan1.svg";
import Logo2 from "../../assets/logo/kajutan2.svg";
import Logo3 from "../../assets/logo/kajutan3.svg";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import { useState } from "react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container px-5 mx-auto flex gap-x-4 justify-between items-center h-24">
      {/* backdrop */}
      <div
        onClick={() => setIsOpen(false)}
        className={`${
          isOpen ? "" : "hidden"
        } backdrop-blur-sm w-full h-screen absolute bg-neutral-700/20 top-0 left-0 z-20 `}
      ></div>

      {/* bars icon */}
      <div className="w-8 text-white relative z-30 md:hidden">
        {isOpen ? (
          <XMarkIcon onClick={() => setIsOpen(false)} />
        ) : (
          <Bars3Icon onClick={() => setIsOpen(true)} />
        )}

        {/* menu in bars */}
        <div
          className={`${
            isOpen ? "" : "hidden"
          } absolute bg-white left-0 w-32 z-30 rounded-md`}
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
              <Link to="/menu">Meny</Link>
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

      {/* menu in desktop */}
      <div className="hidden md:block flex-1 translate-y-8 ">
        <ul className="flex justify-end gap-x-4 text-white">
          <li className="hover:text-k-brown p-2">
            <Link to="/">Hem</Link>
          </li>
          <li className="hover:text-k-brown p-2">
            <Link>Om Kajutan</Link>
          </li>
        </ul>
      </div>
      <div className="w-1/3 relative -top-2 min-[580px]:w-[30%] sm:w-[28%] md:w-[17%] md:-top-7 lg:w-[12%]">
        <img className="absolute" src={Logo1} alt="logo" />
        <img className="absolute animate-spinSlow" src={Logo2} alt="logo" />
        <img className="absolute animate-wave" src={Logo3} alt="logo" />
      </div>
      <div className="w-8 text-white opacity-0 md:hidden">
        <Bars3Icon />
      </div>
      <div className="hidden md:block flex-1 translate-y-8 ">
        <ul className="flex justify-start gap-x-4 text-white">
          <li className="hover:text-k-brown p-2">
            <Link to="/menu">Meny</Link>
          </li>

          <li className="hover:text-k-brown p-2">
            <Link>Kontakta oss</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
