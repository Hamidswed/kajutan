import { useForm } from "react-hook-form";
import { Loading } from "../loading/Loading";
import toast from "react-hot-toast";
import useAddCategory from "../../hook/useAddCategory";
import useEditCategory from "../../hook/useEditCategory";

export default function AddCategory({ categoryToEdit = {}, onClose }) {
  const { _id: editId } = categoryToEdit;
  const isEditSession = Boolean(editId);
  const { main_title, included, main_img } = categoryToEdit;

  let editValue = {};
  if (isEditSession) {
    editValue = {
      main_title,
      included,
      main_img,
    };
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: editValue });

  const { isCreating, createCategory } = useAddCategory();
  const { isEditing, updateCategory } = useEditCategory();

  const mySubmit = (category) => {
    try {
      if (isEditSession) {
        updateCategory(
          { id: editId, newCategory: category },
          {
            onSuccess: () => {
              onClose();
              reset();
            },
          }
        );
      } else {
        createCategory(category, {
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
          {...register("main_title", { required: "Required" })}
          placeholder="Enter title..."
          className="border border-gray-400"
        />
        {errors && errors.main_title && (
          <span className="block text-sm text-red-500">
            {errors.main_title.message}
          </span>
        )}
        <input
          type="text"
          {...register("included", { required: "Required" })}
          placeholder="Enter included..."
          className="border border-gray-400"
        />
        {errors && errors.included && (
          <span className="block text-sm text-red-500">
            {errors.included.message}
          </span>
        )}
        <input
          type="text"
          {...register("main_img", { required: "Required" })}
          placeholder="Enter image..."
          className="border border-gray-400"
        />
        {errors && errors.main_img && (
          <span className="block text-sm text-red-500">
            {errors.main_img.message}
          </span>
        )}

        <button className="bg-k-lightBrown w-full py-2 rounded-md flex justify-center">
          {isCreating || isEditing ? <Loading height="25" /> : "Submit"}
        </button>
      </form>
    </div>
  );
}
