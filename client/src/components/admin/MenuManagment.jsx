import Modal from "../../Modal/Modal";
import useCategory from "../../hook/useCategory";
import useMenu from "../../hook/useMenu";
import useModalStore from "../../store/modalStore";
import { Loading } from "../loading/Loading";
import AddFood from "./AddFood";
import MenuTable from "./MenuTable";

export default function MenuManagment({ optionHandler, option }) {
  const { setOpen, open } = useModalStore();
  const { data, isLoading } = useMenu();
  const { data: categories } = useCategory();

  const filteredData = data?.filter((item) => item.category === option);

  if (isLoading) return <Loading />;

  return (
    <div className="w-full min-[400px]:w-full md:max-w-screen-md space-y-4">
      <div>
        <button
          className="flex gap-x-2 bg-k-brown px-4 py-2 rounded-md w-full justify-center items-center"
          onClick={setOpen}
        >
          Add food
        </button>
        <Modal open={open} onClose={setOpen}>
          <AddFood />
        </Modal>
      </div>
      <form className="flex justify-between max-w-[300px] mx-auto gap-x-2">
        <label htmlFor="menu">Filter</label>
        <select
          id="menu"
          className="bg-transparent border border-k-lightBrown rounded-md"
          onChange={optionHandler}
        >
          <option className="bg-neutral-800">All</option>
          {categories?.map((category) => {
            return (
              <option
                key={category._id}
                value={category.main_title}
                className="bg-neutral-800"
              >
                {category.main_title}
              </option>
            );
          })}
        </select>
      </form>
      <MenuTable filteredData={option === "All" ? data : filteredData} />
    </div>
  );
}
