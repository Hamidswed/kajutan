import { UserCircleIcon } from "@heroicons/react/16/solid";

export default function CommentItem({ comment }) {
  return (
    <div className="flex relative items-center gap-x-2 w-full p-2 border border-k-brown rounded-md sm:w-[48%] mx-auto md:w-[32%] lg:h-20 lg:min-w-[30%]">
      <div>
        <UserCircleIcon className="w-10 text-gray-500" />
      </div>
      <div>
        <h1 className="font-bold text-k-lightBrown">
          {comment.name.charAt(0).toUpperCase()}
          {comment.name.slice(1)}
        </h1>
        <p>{comment.message}</p>
      </div>
      <p className="text-xs absolute top-2 right-2 text-k-brown">
        {new Date(comment.DOB).toLocaleDateString()}
      </p>
    </div>
  );
}
