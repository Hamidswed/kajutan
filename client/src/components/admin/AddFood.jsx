import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { addFood } from "../../services/menuServices";
import toast from "react-hot-toast";
import useCategory from "../../hook/useCategory";
import { Loading } from "../loading/Loading";
import { XMarkIcon } from "@heroicons/react/24/outline";
import useModalStore from "../../store/modalStore";

export default function AddFood() {
  const { setOpen } = useModalStore();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { data: categories, isLoading } = useCategory();
  const { isPending, mutateAsync } = useMutation({
    mutationFn: addFood,
  });

  const mySubmit = async (food) => {
    try {
      const data = await mutateAsync(food);
      if (data.message) {
        toast.error(data.message);
        return;
      }
      if (data) {
        toast.success(`${data.title} is added successfully!`);
        reset();
        return;
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="divide-yellow-900">
      <div className="text-black flex justify-between">
        <h1>Add food</h1>
        <XMarkIcon className="w-5" onClick={setOpen} />
      </div>
      <form
        action=""
        className="flex flex-col gap-y-3 mt-4"
        onSubmit={handleSubmit(mySubmit)}
      >
        <input
          type="text"
          {...register("title", { required: "Required" })}
          placeholder="Enter title..."
          className="border border-gray-400"
        />
        {errors && errors.title && (
          <span className="block text-sm text-red-500">
            {errors.title.message}
          </span>
        )}
        <input
          type="number"
          {...register("price", { required: "Required" })}
          placeholder="Enter price..."
          className="border border-gray-400"
        />
        {errors && errors.price && (
          <span className="block text-sm text-red-500">
            {errors.price.message}
          </span>
        )}
        <select
          id="menu"
          className="bg-transparent border border-gray-400 py-2 rounded-md text-gray-400"
          {...register("category", { required: "Required" })}
        >
          {/* <option className="bg-neutral-800 ">Select category</option> */}
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
        {errors && errors.category && (
          <span className="block text-sm text-red-500">
            {errors.category.message}
          </span>
        )}
        <input
          type="text"
          {...register("ingredient")}
          placeholder="Enter ingredient..."
          className="border border-gray-400"
        />
        <input
          type="text"
          {...register("image", { required: "Required" })}
          placeholder="Enter image..."
          className="border border-gray-400"
        />
        {errors && errors.image && (
          <span className="block text-sm text-red-500">
            {errors.image.message}
          </span>
        )}

        <button className="bg-k-brown w-full py-2 rounded-md">
          {isPending ? <Loading /> : "Submit"}
        </button>
      </form>
    </div>
  );
}
