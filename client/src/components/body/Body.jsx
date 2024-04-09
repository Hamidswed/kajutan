import { Link } from "react-router-dom";
import Kajutan from "../../assets/kajutan.jpg";
import { MapPinIcon } from "@heroicons/react/16/solid";

export function Body() {
  return (
    <div className="px-4 mt-28 container 2xl:max-w-screen-2xl mx-auto flex flex-col items-center z-20">
      <div className="w-full">
        <div className="text-k-lightBrown relative flex flex-col items-center">
        <div className="border border-k-lightBrown w-full"></div>

          <h2 className=" py-2 px-4 xl:text-2xl xl:-top-4 xl:px-6">
            Öppettider
          </h2>
        </div>
        <div className="flex justify-center text-white gap-x-5 mt-6 xl:mt-10">
          <div className="text-K-xlightBrown xl:text-xl flex flex-col xl:gap-y-2">
            <p className="text-white">måndag - torsdag </p>
            <p>fredag</p>
            <p>lördag</p>
            <p>söndag</p>
          </div>
          <div className="text-K-xlightBrown xl:text-xl flex flex-col xl:gap-y-2">
            <p className="text-white">10:00 — 20:00</p>
            <p>10:00 — 23:00</p>
            <p>12:00 — 23:00</p>
            <p>12:00 — 20:00</p>
          </div>
        </div>
      </div>
      <div className="mt-8 rounded-lg overflow-hidden border border-k-brown relative flex flex-col items-center max-w-[80%] xl:mt-16">
        <img className="opacity-30 w-full" src={Kajutan} alt="kajutan" />
        <div className="absolute flex flex-col items-center top-10 sm:top-20 md:top-24 lg:top-32 gap-y-2 lg:gap-y-4">
          <p className=" text-white text-xs min-[400px]:text-sm sm:text-lg md:text-xl xl:text-2xl">
            Kajutan i Holmsund, vid Umeås kust
          </p>
          <Link to="https://maps.app.goo.gl/qK1bXx8DCLKP2Mvq6" target="_tab">
            <button className=" bg-k-lightBrown py-2 px-2 text-white rounded-xl hover:bg-k-brown flex justify-center items-center gap-x-1">
              <MapPinIcon className="w-5 animate-pulse" />
              <span>Hitta oss</span>
            </button>
          </Link>
        </div>
      </div>
      <div className="h-24"></div>
    </div>
  );
}
