import { XMarkIcon } from "@heroicons/react/24/outline";
import { useOutsideClick } from "../hook/useOutsideClick";
import useModalStore from "../store/modalStore";

export default function Modal({ children, open, onClose, title }) {
  const ref = useOutsideClick(onClose);
  return (
    open && (
      <div className="backdrop-blur-sm fixed top-0 left-0 w-full h-screen bg-neutral-700/20 z-30">
        <div ref={ref} className="modal divide-y divide-gray-500">
          <div className="text-black flex justify-between pb-2">
            <h1 className="font-bold">{title}</h1>
            <XMarkIcon className="w-5 cursor-pointer" onClick={onClose} />
          </div>
          {children}
        </div>
      </div>
    )
  );
}
