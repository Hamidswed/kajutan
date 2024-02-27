import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import {
  HomeIcon,
  InformationCircleIcon,
  ListBulletIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { Logo } from "./Logo";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

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
          } absolute bg-white left-0 w-36 z-30 rounded-md`}
        >
          <ul className="flex flex-col sm:text-lg text-neutral-500 divide-y">
            <li
              className="hover:text-k-brown p-2"
              onClick={() => setIsOpen(false)}
            >
              <Link to="/" className="flex items-center gap-x-2">
                <HomeIcon className="w-5" />
                <span>Hem</span>
              </Link>
            </li>
            <li
              className="hover:text-k-brown p-2"
              onClick={() => setIsOpen(false)}
            >
              <Link to="/menu" className="flex items-center gap-x-2">
                <ListBulletIcon className="w-5" />
                <span>Meny</span>
              </Link>
            </li>
            <li
              className="hover:text-k-brown p-2"
              onClick={() => setIsOpen(false)}
            >
              <Link to="/about" className="flex items-center gap-x-2">
                <InformationCircleIcon className="w-5" />
                <span>Om Kajutan</span>
              </Link>
            </li>
            <li
              className="hover:text-k-brown p-2"
              onClick={() => setIsOpen(false)}
            >
              <Link to="/contact" className="flex items-center gap-x-2">
                <PhoneIcon className="w-5" />
                <span>Kontakta oss</span>
              </Link>
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
      <div className="w-8 text-white opacity-0 md:hidden">
        <Bars3Icon />
      </div>
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
