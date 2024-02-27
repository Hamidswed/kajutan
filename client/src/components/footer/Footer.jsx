import { PhoneIcon } from "@heroicons/react/16/solid";
import Instagram from "../../assets/socialmedia/instagram.svg";
import Facebook from "../../assets/socialmedia/facebook.svg";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <div className="z-30 fixed bottom-0 left-0 right-0 w-full bg-k-brown py-3 px-4">
      <div className="container mx-auto xl:max-w-screen-xl flex justify-center items-center sm:gap-x-6">
        <div className="flex justify-center items-center gap-x-1 flex-auto sm:justify-end sm:flex-1">
          <div className="w-7 text-k-xlightBrown animate-shake">
            <PhoneIcon />
          </div>
          <a href="tel:09024040" className="text-k-xlightBrown">
            090 – 240 40
          </a>
        </div>
        <div className="flex flex-1 gap-x-3 justify-center items-center sm:justify-start">
          <Link
            to="https://www.instagram.com/kajutan_i_holmsund/?hl=en"
            target="_blank"
          >
            <div className="w-5 stroke-k-xlightBrown">
              <img src={Instagram} alt="instagram" />
            </div>
          </Link>
          <Link
            to="https://www.facebook.com/p/Restaurang-Kajutan-100054215632458/"
            target="_blank"
          >
            <div className="w-5">
              <img src={Facebook} alt="instagram" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
