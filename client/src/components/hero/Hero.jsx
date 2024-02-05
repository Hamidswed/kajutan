import Pizza from "../../assets/hero.png";

export function Hero() {
  return (
    <div className="w-full flex justify-center items-center mt-10">
      <div className="w-full relative flex justify-center">
        <img src={Pizza} alt="pizza" />
        <div className="text-white flex flex-col items-center absolute z-10 -top-10">
          <p>Välkommna till</p>
          <p className="font-yellotail text-5xl">Kajutan</p>
        </div>
      </div>
    </div>
  );
}
