import { UserCircleIcon } from "@heroicons/react/16/solid";

export default function CommentItem({ comment }) {
  return (
    <div className="flex items-center gap-x-2 max-w-sm w-full py-2 min-[560px]:justify-start min-[560px]:px-2">
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
    </div>
  );
}
