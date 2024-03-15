import useModalStore from "../../store/modalStore";
import { useOutsideClick } from "../../hook/useOutsideClick";
import FoodCard from "./FoodCard";

export function Modal() {
  const { open, setOpen: onClose, food } = useModalStore();
  const ref = useOutsideClick(onClose);

  return (
    open && (
      <div className="backdrop-blur-sm fixed top-0 left-0 w-full h-screen bg-neutral-700/20 z-30">
        <div ref={ref} className="modal">
          <FoodCard food={food} onClose={onClose} />
        </div>
      </div>
    )
  );
}
