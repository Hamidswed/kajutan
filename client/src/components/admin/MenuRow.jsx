import { PencilIcon, TrashIcon } from "@heroicons/react/24/outline";
import useModalStore from "../../store/modalStore";
import Table from "../table/Table";
import Modal from "../../Modal/Modal";
import AddFood from "./AddFood";

export default function MenuRow({ food }) {
  const { openEdit, setOpenEdit, setFood } = useModalStore();
  const editHandler = () => {
    setOpenEdit();
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
      <td className="sm:space-x-2">
        <button onClick={editHandler}>
          <PencilIcon className="w-3 sm:w-4 md:w-5" />
        </button>
        <Modal open={openEdit} onClose={setOpenEdit}>
          {/* <FoodCard food={food} /> */}
          <AddFood foodToEdit={food} />
        </Modal>
        <button>
          <TrashIcon className="w-3 sm:w-4 md:w-5 text-red-600" />
        </button>
      </td>
    </Table.Row>
  );
}
