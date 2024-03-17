import useModalStore from "../../store/modalStore";

export default function FoodCard({ food }) {
  return (
    <div className="flex flex-col gap-y-2">
      {/* <div className="flex justify-between border-b border-stone-500 p-1">
        <h1>{food.title}</h1>
        <XMarkIcon className="w-5 cursor-pointer" onClick={onClose} />
      </div> */}

      <div className="w-full rounded-md overflow-hidden mt-2">
        <img src={food.image} alt={food.title} className="w-full" />
      </div>
      <div className="flex justify-between text-neutral-700">
        <h2>{food.category}</h2>
        <div>{food.price} kr</div>
      </div>
      <div className="text-k-lightBrown">{food.ingredient}</div>
    </div>
  );
}
