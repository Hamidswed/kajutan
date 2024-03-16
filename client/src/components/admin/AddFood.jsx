import { useForm } from "react-hook-form";
import useCategory from "../../hook/useCategory";
import { Loading } from "../loading/Loading";
import { XMarkIcon } from "@heroicons/react/24/outline";
import useModalStore from "../../store/modalStore";
import useAddFood from "../../hook/useAddFood";
import useEditFood from "../../hook/useEditFood";

export default function AddFood() {
  const { food: foodToEdit } = useModalStore();
  console.log(foodToEdit, "food");
  const { _id: editId } = foodToEdit;
  console.log(editId, "edit id");
  const isEditSession = Boolean(editId);
  const { title, price, ingredient, category, image } = foodToEdit;
  let editValue = {};
  if (isEditSession) {
    editValue = {
      title,
      price,
      ingredient,
      category,
      image,
    };
  }
  const { setOpen } = useModalStore();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: editValue });

  const { data: categories, isLoading } = useCategory();
  const { isPending, createFood } = useAddFood();
  const { isPending: isEditing, editFood } = useEditFood();

  const mySubmit = async (food) => {
    try {
      if (isEditSession) {
        editFood(
          { id: editId, food },
          {
            onSuccess: () => {
              setOpen();
              reset();
            },
          }
        );
      } else {
        createFood(food, {
          onSuccess: () => {
            setOpen();
            reset();
          },
        });
      }
      // const data = await mutateAsync(food);
      // if (data.message) {
      //   toast.error(data.message);
      //   return;
      // }
      // if (data) {
      //   toast.success(`${data.title} is added successfully!`);
      //   reset();
      //   return;
      // }
      console.log(food);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="divide-gray-900">
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
