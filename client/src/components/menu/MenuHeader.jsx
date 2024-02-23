import { useState } from "react";
import { MenuItem } from "./MenuItem";
import { ChevronDownIcon } from "@heroicons/react/16/solid";

export function MenuHeader({ item }) {
  const [open, setOpen] = useState(false);
  console.log(item.menu, "item");
  return (
    <div
      className="w-full border border-k-lightBrown text-k-lightBrown p-2 rounded-lg"
      onClick={() => setOpen(!open)}
    >
      <div className="flex justify-between items-center gap-x-2">
        {open ? null : (
          <div className="w-1/2 rounded-md overflow-hidden flex-1">
            <img className="w-full" src={item.main_img} alt={item.main_title} />
          </div>
        )}

        <div className="flex-1">
          <p>{item.main_title}</p>
          <p className="text-sm text-k-brown">
            {!open
              ? item.included.length <= 40
                ? item.included
                : item.included.slice(0, 25) + " ..."
              : item.included}
          </p>
        </div>
        <div className="w-5 h-5">
          <ChevronDownIcon
            className={`${
              open ? "rotate-180" : ""
            } transition-all duration-300`}
          />
        </div>
      </div>

      {open ? (
        <div className="mt-3 space-y-2 transition-all duration-500">
          {item.menu.map((food) => {
            return <MenuItem key={food.id} food={food} />;
          })}
        </div>
      ) : null}
    </div>
  );
}
