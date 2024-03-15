import { XMarkIcon } from "@heroicons/react/24/outline";
import Modal from "../../Modal/Modal";
import useModalStore from "../../store/modalStore";

export default function ModalPanel({food}) {
  const { openEdit, setOpenEdit: onClose } = useModalStore();

  return (
    <Modal open={openEdit}>
      <div className="flex flex-col gap-y-2 text-black">
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
    </Modal>
  );
}
