import useComment from "../../../hook/useComment";
import { Loading } from "../../loading/Loading";
import CommentTable from "./CommentTable";

export default function CommentManagment() {
  const { isLoading, data: comments } = useComment();
  console.log(comments);

  if (isLoading) return <Loading />;

  return (
    <div className="w-full min-[400px]:w-[70%] md:max-w-screen-md flex flex-col items-center">
      <CommentTable comments={comments} />
    </div>
  );
}
