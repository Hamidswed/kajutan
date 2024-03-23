import { useForm } from "react-hook-form";
import useCategory from "../../../hook/useCategory";
import { Loading } from "../../loading/Loading";
import useAddFood from "../../../hook/useAddFood";
import useEditFood from "../../../hook/useEditFood";
import toast from "react-hot-toast";

export default function AddFood({ foodToEdit = {}, onClose }) {
  const { _id: editId } = foodToEdit;
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

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: editValue });

  const { data: categories, isLoading } = useCategory();
  const { isPending, createFood } = useAddFood();
  const { isPending: isEditing, updateFood } = useEditFood();

  const mySubmit = (food) => {
    try {
      if (isEditSession) {
        updateFood(
          { id: editId, newFood: food },
          {
            onSuccess: () => {
              onClose();
              reset();
            },
          }
        );
      } else {
        createFood(food, {
          onSuccess: () => {
            onClose();
            reset();
          },
        });
      }
    } catch (error) {
      toast.error(error);
    }
  };
  return (
    <div className="divide-gray-900">
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
          className="bg-transparent border border-gray-400 py-2 px-1 rounded-md text-gray-400"
          {...register("category", { required: "Required" })}
        >
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
          {...register("image")}
          placeholder="Enter image..."
          className="border border-gray-400"
        />

        <button className="bg-k-lightBrown w-full py-2 rounded-md flex justify-center">
          {isPending || isEditing ? <Loading height="25" /> : "Submit"}
        </button>
      </form>
    </div>
  );
}
