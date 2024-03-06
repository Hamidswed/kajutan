import { XMarkIcon } from "@heroicons/react/24/outline";
import { useOutsideClick } from "../../hook/useOutsideClick";
import useModalStore from "../../store/modalStore";

export function Modal() {
  const { open, setOpen: onClose, food } = useModalStore();

  const ref = useOutsideClick(onClose);

  return (
    open && (
      <div className="backdrop-blur-sm fixed top-0 left-0 w-full h-screen bg-neutral-700/20 z-30">
        <div ref={ref} className="modal">
          <div className="flex flex-col gap-y-2">
            <div className="flex justify-between border-b border-stone-500 p-1">
              <h1>{food.title}</h1>
              <XMarkIcon className="w-5 cursor-pointer" onClick={onClose} />
            </div>
            <div className="flex flex-col gap-y-1">
              <div className="w-full rounded-md overflow-hidden">
                <img src={food.image} alt={food.title} className="w-full" />
              </div>
              <div className="flex justify-between">
                <h2>{food.category}</h2>
                <div>{food.price} kr</div>
              </div>
              <div className="text-k-lightBrown">{food.ingredient}</div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
