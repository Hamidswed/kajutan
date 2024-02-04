import { Link } from "react-router-dom";
import Logo from "../../assets/kajutan.svg";

export function Navbar() {
  return (
    <div className="container px-5 mx-auto flex flex-col gap-y-4 justify-center items-center mt-6">
      <div className="w-1/3 ">
        <img src={Logo} alt="logo" />
      </div>
      <ul className="flex gap-x-5 sm:text-lg text-k-darkBlue font-semibold">
        <li className="hover:text-k-brown">
          <Link>Hem</Link>
        </li>
        <li className="hover:text-k-brown">
          <Link>Erbjudande</Link>
        </li>
        <li className="hover:text-k-brown">
          <Link>Kontakta oss</Link>
        </li>
      </ul>
    </div>
  );
}
