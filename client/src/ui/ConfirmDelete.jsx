export default function ConfirmDelete({ resourceName }) {
  return (
    <div className="text-neutral-800 pt-2">
      <h2>
        Do you want to delete <span className="font-bold">{resourceName}</span>?
      </h2>
      <div className="flex justify-around mt-2 gap-x-2">
        <button className="bg-k-brown text-white px-3 py-1 rounded-md w-full">
          Cancel
        </button>
        <button className="bg-red-600 text-white px-3 py-1 rounded-md w-full">
          Yes
        </button>
      </div>
    </div>
  );
}
