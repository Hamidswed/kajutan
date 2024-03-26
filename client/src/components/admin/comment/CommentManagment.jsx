import useComment from "../../../hook/useComment";
import sortedByDate from "../../../util/sortedByDate";
import { Loading } from "../../loading/Loading";
import CommentTable from "./CommentTable";

export default function CommentManagment() {
  const { isLoading, data: comments } = useComment();

  if (isLoading) return <Loading />;
  console.log(sortedByDate(comments, "desc"));

  return (
    <div className="w-full min-[400px]:w-[90%] md:max-w-screen-md flex flex-col items-center">
      <CommentTable comments={sortedByDate(comments, "desc")} />
    </div>
  );
}
