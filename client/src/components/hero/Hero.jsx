import { Link } from "react-router-dom";
import Pizza from "../../assets/hero.png";
import BgLargWp from "../../assets/background/bg-large.webp";
import BgLarg from "../../assets/background/bg-large.jpg";
import BgSmallWp from "../../assets/background/bg-small.webp";
import BgSmall from "../../assets/background/bg-small.jpg";

export function Hero() {
  return (
    <div className="w-full flex justify-center items-center mt-16">
      <div className="w-full relative flex justify-center">
        {/* <img className="translate-y-8" src={Pizza} alt="pizza" /> */}
        <picture className="translate-y-[calc(35%-10px)] md:translate-y-[calc(25%+2rem)] w-full">
          <source
            srcSet={BgLargWp}
            type="image/webp"
            media="(min-width: 768px)"
          />
          <source srcSet={BgLarg} type="image/jpg" media="(min-width: 768px)" />
          <source
            srcSet={BgSmallWp}
            type="image/webp"
            media="(max-width: 768px)"
          />
          <source
            srcSet={BgSmall}
            type="image/jpg"
            media="(max-width: 768px)"
          />
          <img alt="banner" src={BgLarg} className="w-full"/>
        </picture>
        <div className="text-white flex flex-col items-center absolute z-10 top-6 min-[400px]:top-12 min-[460px]:top-20 sm:top-28 md:top-8 xl:top-24">
          <p className="text-k-lightBrown min-[520px]:text-lg md:text-2xl lg:text-4xl">
            Välkomna till
          </p>
          <p className="font-yellotail text-5xl min-[520px]:text-6xl md:text-7xl lg:text-8xl">
            Kajutan
          </p>
        </div>
        <div className="text-white absolute top-[calc(45%-2rem)] min-[520px]:top-[40%] xl:top-[35%] flex flex-col gap-y-3 xl:gap-y-6">
          <p className="md:text-xl xl:text-3xl">Kolla på meny!</p>
          <button className=" border-2 border-k-lightBrown py-2 rounded-xl animate-pulse hover:bg-k-lightBrown xl:text-xl">
            <Link to="/menu">Meny</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
