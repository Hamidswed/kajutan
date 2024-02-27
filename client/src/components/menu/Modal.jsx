import { XMarkIcon } from "@heroicons/react/24/outline";

export function Modal({ openModal, onClose, clickedFood }) {
  return (
    openModal && (
      <div className="backdrop-blur-sm fixed top-0 left-0 w-full h-screen bg-neutral-700/20 z-30">
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-md bg-white shadow-sm transition-all duration-500 ease-in-out p-3 w-[calc(100vw-4rem)] min-[480px]:w-[calc(100vw-15rem)] sm:max-w-sm sm:w-[50%]">
          <div className="flex flex-col gap-y-2">
            <div className="flex justify-between border-b border-stone-500 p-1">
              <h1>{clickedFood.title}</h1>
              <XMarkIcon className="w-5 cursor-pointer" onClick={onClose} />
            </div>
            <div className="flex flex-col gap-y-1">
              <div className="w-full rounded-md overflow-hidden">
                <img
                  src={clickedFood.image}
                  alt={clickedFood.title}
                  className="w-full"
                />
              </div>
              <div className="flex justify-between">
                <h2>{clickedFood.category}</h2>
                <div>{clickedFood.price} kr</div>
              </div>
              <div className="text-k-lightBrown">{clickedFood.ingredient}</div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}