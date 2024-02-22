export function MenuItem({ food }) {
  return (
    <div className="w-full flex justify-between items-center border-t border-k-xlightBrown rounded-md py-3 px-2 gap-x-2">
      <div className="w-1/2 rounded-md overflow-hidden">
        <img src={food.image} alt={food.title} />
      </div>
      <div className="w-full flex justify-between py-2 items-center">
        <div className="flex-1">
          <h2 className="text-white">{food.title}</h2>
          <p className="text-sm text-k-xlightBrown">{food.ingredient}</p>
        </div>
        <p className="text-white font-bold">
          {food.price} <span className="text-sm">kr</span>
        </p>
      </div>
    </div>
  );
}
