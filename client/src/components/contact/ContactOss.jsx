import { useForm } from "react-hook-form";

export function ContactOss() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const validationSchema = {
    required: "Required",
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: "Invalid email address",
    },
  };
  const mySubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="text-white max-w-sm text-center mx-auto mt-8">
      <form
        action=""
        className="flex flex-col gap-y-2"
        onSubmit={handleSubmit(mySubmit)}
      >
        <input
          type="text"
          placeholder="Name..."
          {...register("name", { required: "Required" })}
        />
        {errors && errors.name && (
          <span className="block text-sm text-white">
            {errors.name.message}
          </span>
        )}
        <input
          type="text"
          placeholder="Email..."
          {...register("email", validationSchema)}
        />
        {errors && errors.email && (
          <span className="block text-sm text-white">
            {errors.email.message}
          </span>
        )}
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Message..."
          {...register("message")}
        ></textarea>
        <button
          type="submit"
          className="bg-k-lightBrown w-full py-2 rounded-md flex justify-center"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
