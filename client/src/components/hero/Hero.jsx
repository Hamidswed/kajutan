import { Link } from "react-router-dom";
import Pizza from "../../assets/hero.png";

export function Hero() {
  return (
    <div className="w-full flex justify-center items-center mt-10">
      <div className="w-full relative flex justify-center">
        <img className="translate-y-8" src={Pizza} alt="pizza" />
        <div className="text-white flex flex-col items-center absolute z-10 top-16">
          <p className="text-k-lightBrown">Välkomna till</p>
          <p className="font-yellotail text-5xl">Kajutan</p>
        </div>
        <div className="text-white absolute -bottom-6 flex flex-col gap-y-3">
          <p>Kolla på meny!</p>
          <button className=" border-2 border-k-lightBrown py-2 rounded-xl animate-pulse hover:bg-k-lightBrown">
            <Link to="/menu">Meny</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
