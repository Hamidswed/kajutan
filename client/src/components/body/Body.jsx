import { Link } from "react-router-dom";
import Kajutan from "../../assets/kajutan.jpg";
import { MapPinIcon } from "@heroicons/react/16/solid";

export function Body() {
  return (
    <div className="px-4 mt-16">
      <div>
        <div className="text-k-lightBrown relative flex flex-col items-center">
          <h2 className="bg-neutral-800 px-4 absolute -top-3">Öppettider</h2>
          <div className="border border-k-lightBrown w-full"></div>
        </div>
        <div className="flex justify-center text-white gap-x-5 mt-6">
          <div className="text-K-xlightBrown">
            <p className="text-white">måndag - torsdag </p>
            <p>fredag</p>
            <p>lördag</p>
            <p>söndag</p>
          </div>
          <div className="text-K-xlightBrown">
            <p className="text-white">10:00 — 20:00</p>
            <p>10:00 — 23:00</p>
            <p>12:00 — 23:00</p>
            <p>12:00 — 20:00</p>
          </div>
        </div>
      </div>
      <div className="mt-8 rounded-lg overflow-hidden border border-k-brown relative flex flex-col items-center">
        <img className="opacity-30" src={Kajutan} alt="kajutan" />
        <div className="absolute flex flex-col items-center top-12 gap-y-2">
          <p className=" text-white">Kajutan i Holmsund, vid Umeås kust</p>
          <Link to="https://maps.app.goo.gl/qK1bXx8DCLKP2Mvq6" target="_tab">
            <button className=" bg-k-lightBrown py-2 px-2 text-white rounded-xl hover:bg-k-brown flex justify-center items-center gap-x-1">
              <MapPinIcon className="w-5 animate-pulse" />
              <span>Hitta oss</span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
