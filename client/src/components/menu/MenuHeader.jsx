import { useState } from "react";
import { MenuItem } from "./MenuItem";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

export function MenuHeader({ category, foods, onOpen, setClickedFood }) {
  const [open, setOpen] = useState(false);

  const numOfFood = foods.filter(
    (food) => food.category === category.main_title
  );

  return (
    <div className="relative w-full border border-k-lightBrown text-k-lightBrown p-2 rounded-lg transition duration-500">
      <div
        className={`${
          open
            ? "hidden"
            : "bg-k-brown w-5 h-5 text-xs rounded-full text-white absolute top-2 right-2 flex justify-center items-center"
        }`}
      >
        {numOfFood.length}
      </div>
      <div className="flex justify-between items-center gap-x-2 sm:gap-x-3">
        {open ? null : (
          <div
            className="w-1/2 rounded-md overflow-hidden flex-1 sm:w-1/3 sm:flex-none md:w-1/5"
            onClick={() => setOpen(!open)}
          >
            <img
              className="w-full"
              src={category.main_img}
              alt={category.main_title}
            />
          </div>
        )}

        <div
          className="flex-1 md:flex md:gap-x-4 md:items-center cursor-pointer"
          onClick={() => setOpen(!open)}
        >
          <p className="sm:text-lg flex items-center gap-x-2">
            {category.main_title}
            <span
              className={`${
                !open
                  ? "hidden"
                  : "bg-k-brown w-5 h-5 text-xs rounded-full text-white top-2 right-2 flex justify-center items-center"
              }`}
            >
              {numOfFood.length}
            </span>
          </p>
          <p
            className="text-sm text-k-brown sm:text-base cursor-pointer"
            onClick={() => setOpen(!open)}
          >
            {!open
              ? category.included.length <= 40
                ? category.included
                : category.included.slice(0, 25) + " ..."
              : category.included}
          </p>
        </div>
        <div className="w-5 h-5">
          <ChevronDownIcon
            className={`${
              open ? "rotate-180" : ""
            } transition-all duration-300 cursor-pointer`}
            onClick={() => setOpen(!open)}
          />
        </div>
      </div>

      {open ? (
        <div className="mt-3 space-y-2">
          {foods.map(
            (food) =>
              food.category === category.main_title && (
                <MenuItem
                  key={food._id}
                  food={food}
                  onOpen={onOpen}
                  setClickedFood={setClickedFood}
                  openMenu={() => setOpen(!open)}
                />
              )
          )}
        </div>
      ) : null}
    </div>
  );
}
