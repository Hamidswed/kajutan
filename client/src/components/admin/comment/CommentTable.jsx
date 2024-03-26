import Table from "../../table/Table";
import CommentRow from "./CommentRow";

export default function CommentTable({ comments }) {
  if (comments?.length === 0)
    return <div className="text-white">No comments!</div>;
  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Comments</th>
        <th>Confirmed</th>
        <th className="text-center">Date</th>
        <th className="text-center">...</th>
      </Table.Header>
      <Table.Body>
        {comments?.length !== 0 &&
          comments?.map((comment, index) => {
            return (
              <CommentRow key={comment._id} index={index} comment={comment} />
            );
          })}
      </Table.Body>
    </Table>
  );
}
