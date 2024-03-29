import { useState } from "react";
import Modal from "../../ui/Modal";
import FoodCard from "./FoodCard";

export function MenuItem({ food }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div
      onClick={() => setIsModalOpen(!isModalOpen)}
      className="w-full flex justify-between items-center border-t border-k-xlightBrown rounded-md py-3 px-2 gap-x-3 lg:gap-x-6 cursor-pointer"
    >
      <div className="w-1/2 rounded-md overflow-hidden md:w-1/4 min-[510px]:w-1/3 lg:w-1/6">
        <img src={food.image} alt={food.title} className="w-full" />
      </div>
      <div className="w-full flex justify-between py-2 items-center gap-x-2">
        <div className="flex-1">
          <h2 className="text-white">{food.title}</h2>
          <p className="text-sm text-k-xlightBrown">{food.ingredient}</p>
        </div>
        <p className="text-white font-bold">
          {food.price} <span className="text-sm">kr</span>
        </p>
      </div>
      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(!isModalOpen)}
        title={food.title}
      >
        <FoodCard food={food} />
      </Modal>
    </div>
  );
}
