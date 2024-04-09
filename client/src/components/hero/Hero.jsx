import { Link } from "react-router-dom";
import Pizza from "../../assets/hero.png";
import BgLargWp from "../../assets/background/bg-large.webp";
import BgLarg from "../../assets/background/bg-large.png";
import BgSmallWp from "../../assets/background/bg-small.webp";
import BgSmall from "../../assets/background/bg-small.png";

export function Hero() {
  return (
    <div className="w-full flex justify-center items-center mt-16">
      <div className="w-full relative flex justify-center">
        <img className="translate-y-8" src={Pizza} alt="pizza" />
        <picture>
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
          <img alt="banner" src={BgLarg} />
        </picture>
        <div className="text-white flex flex-col items-center absolute z-10 top-10 min-[430px]:top-16 min-[460px]:top-20 min-[520px]:top-24 sm:top-28">
          <p className="text-k-lightBrown min-[520px]:text-lg md:text-2xl lg:text-4xl">
            Välkomna till
          </p>
          <p className="font-yellotail text-5xl min-[520px]:text-6xl md:text-7xl lg:text-8xl">
            Kajutan
          </p>
        </div>
        <div className="text-white absolute -bottom-6 flex flex-col gap-y-3 md:bottom-12 xl:top-[23%] xl:gap-y-6">
          <p className="md:text-xl xl:text-3xl">Kolla på meny!</p>
          <button className=" border-2 border-k-lightBrown py-2 rounded-xl animate-pulse hover:bg-k-lightBrown xl:text-xl">
            <Link to="/menu">Meny</Link>
          </button>
        </div>
      </div>
    </div>
  );
}
