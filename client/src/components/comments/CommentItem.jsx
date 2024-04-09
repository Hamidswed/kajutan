import { UserCircleIcon } from "@heroicons/react/16/solid";

export default function CommentItem({ comment }) {
  const date = new Date(comment.DOB);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return (
    <div className="flex flex-col gap-y-3 gap-x-2 w-full p-2 border border-k-brown rounded-md sm:w-[48%] mx-auto md:w-[32%] lg:min-h-20 lg:min-w-[30%]">
      <div className="flex items-center gap-x-2">
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
      <p className="text-xs text-k-brown mx-2 border-t border-k-brown pt-2 border-opacity-60">
        {date.toLocaleDateString("en", options)},{" "}
        {date.toLocaleTimeString("en-US")}
      </p>
    </div>
  );
}
