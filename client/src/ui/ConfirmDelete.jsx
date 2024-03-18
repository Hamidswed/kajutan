export default function ConfirmDelete({ resourceName, onClose, onConfirm }) {
  return (
    <div className="text-neutral-800 pt-2">
      <h2>
        Do you want to delete <span className="font-bold">{resourceName}</span>?
      </h2>
      <div className="flex justify-around mt-3 gap-x-2">
        <button
          className="bg-red-600 text-white px-3 py-1 rounded-md w-full"
          onClick={onConfirm}
        >
          Yes
        </button>
        <button
          className="bg-k-brown text-white px-3 py-1 rounded-md w-full"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
