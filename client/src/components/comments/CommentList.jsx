import useComment from "../../hook/useComment";
import CommentItem from "./CommentItem";
import { Loading } from "./../loading/Loading";

export default function CommentList() {
  const { isPending, data: comments } = useComment();
  const confirmedComments = comments?.filter(
    (comment) => comment.isConfirmed === true
  );

  if (isPending) return <Loading />;
  return (
    <div className="flex flex-col items-center justify-center w-full px-6">
      <h1 className="text-k-brown text-xl mb-6">Vad folk säger</h1>
      <div className="comments">
        {confirmedComments?.map((comment) => {
          return <CommentItem key={comment._id} comment={comment} />;
        })}
      </div>
    </div>
  );
}
