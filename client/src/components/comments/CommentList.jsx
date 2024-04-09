import useComment from "../../hook/useComment";
import CommentItem from "./CommentItem";
import { Loading } from "./../loading/Loading";
import {
  ArrowLeftCircleIcon,
  ArrowRightCircleIcon,
} from "@heroicons/react/24/outline";
import { useRef } from "react";
import sortedByDate from "./../../util/sortedByDate";

export default function CommentList() {
  const { isPending, data: comments } = useComment();
  const confirmedComments = comments?.filter(
    (comment) => comment.isConfirmed === true
  );
  const commentsLength = confirmedComments?.length;
  const containerRef = useRef(null);

  const scrollLeft = () => {
    containerRef.current.scrollLeft -= containerRef.current.clientWidth;
  };

  const scrollRight = () => {
    containerRef.current.scrollLeft += containerRef.current.clientWidth;
  };

  if (isPending) return <Loading />;

  return (
    commentsLength !== 0 && (
      <div className="flex flex-col items-center justify-center w-full px-6">
        <h1 className="text-k-brown text-xl mb-6">Vad folk säger</h1>
        <div className="flex items-center gap-4 w-full justify-center">
          <button
            className={`hidden xl:${commentsLength >= 4 ? "block" : "hidden"}`}
            onClick={scrollLeft}
          >
            <ArrowLeftCircleIcon className="w-7 text-k-brown opacity-50 hover:opacity-100" />
          </button>
          <div className="comments scroll-smooth" ref={containerRef}>
            {sortedByDate(confirmedComments)?.map((comment) => {
              return <CommentItem key={comment._id} comment={comment} />;
            })}
          </div>
          <button
            className={`hidden xl:${commentsLength >= 4 ? "block" : "hidden"}`}
            onClick={scrollRight}
          >
            <ArrowRightCircleIcon className="w-7 text-k-brown opacity-50 hover:opacity-100" />
          </button>
        </div>
      </div>
    )
  );
}
