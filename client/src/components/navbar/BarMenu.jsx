import {
  Bars3Icon,
  HomeIcon,
  InformationCircleIcon,
  ListBulletIcon,
  PhoneIcon,
  UserIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export default function BarMenu({ isOpen, setIsOpen, value }) {
  return (
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
          <li
            className="hover:text-k-brown p-2"
            onClick={() => setIsOpen(false)}
          >
            {value ? (
              <Link to={`/admin`} className="flex items-center gap-x-2">
                <UserIcon className="w-5" />
                <span>Admin</span>
              </Link>
            ) : (
              <Link to={`/login`} className="flex items-center gap-x-2">
                <UserIcon className="w-5" />
                <span>Logga in</span>
              </Link>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
}
