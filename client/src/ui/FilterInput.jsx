export default function FilterInput({ optionHandler, categories }) {
  return (
    <form className="flex justify-between items-center max-w-[300px] gap-x-10 order-2 md:flex-1 md:gap-x-4">
      <label htmlFor="menu">Filter</label>
      <select
        id="menu"
        className="bg-transparent border border-k-lightBrown rounded-md py-2 px-1 text-sm"
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
  );
}
