import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import useModalStore from "../../store/modalStore";
import Table from "../table/Table";
import Modal from "../../ui/Modal";
import AddFood from "./AddFood";
import { useState } from "react";
import ConfirmDelete from "../../ui/ConfirmDelete";

export default function MenuRow({ food }) {
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const { setOpen, setFood } = useModalStore();
  const editHandler = () => {
    setOpen();
    setFood(food);
  };
  return (
    <Table.Row key={food._id} className="cursor-pointer">
      <td className="w-1/4 p-1 min-[400px]:p-2 md:p-3 min-[450px]:w-[25%] min-[600px]:w-[20%] md:w-[15%]">
        <img src={food.image} alt={food.title} />
      </td>
      <td>
        {food.title}
        <br />
        <span className="text-k-brown text-xs">{food.category}</span>
      </td>
      <td>{food.price}</td>
      <td className="min-[480px]:space-x-1 sm:space-x-2 text-center">
        <button onClick={() => setIsEditOpen(true)}>
          <PencilIcon className="w-3 sm:w-4 md:w-5" />
        </button>
        <Modal
          open={isEditOpen}
          onClose={() => setIsEditOpen(false)}
          title="Edit"
        >
          <AddFood foodToEdit={food} onClose={() => setIsEditOpen(false)} />
        </Modal>
        <button onClick={() => setIsDeleteOpen(true)}>
          <TrashIcon className="w-3 sm:w-4 md:w-5 text-red-600" />
        </button>
        <Modal
          open={isDeleteOpen}
          onClose={() => setIsDeleteOpen(false)}
          title={`Delete ${food.title}`}
        >
          <ConfirmDelete resourceName={food.title} />
        </Modal>
      </td>
    </Table.Row>
  );
}
