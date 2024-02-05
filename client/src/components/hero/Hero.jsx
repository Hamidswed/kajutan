import Pizza from "../../assets/pizza.png";

export function Hero() {
  return (
    <div className="w-full flex justify-center items-center mt-4">
      <div className="w-[80%]">
        <img className="animate-spinSlow " src={Pizza} alt="pizza" />
      </div>
    </div>
  );
}
