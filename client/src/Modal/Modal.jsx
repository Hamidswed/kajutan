import { useOutsideClick } from "../hook/useOutsideClick";
import useModalStore from "../store/modalStore";

export default function Modal({ open, children, onClose }) {
  const ref = useOutsideClick(onClose);
  return (
    open && (
      <div className="backdrop-blur-sm fixed top-0 left-0 w-full h-screen bg-neutral-700/20 z-30">
        <div ref={ref} className="modal">
          {children}
        </div>
      </div>
    )
  );
}
