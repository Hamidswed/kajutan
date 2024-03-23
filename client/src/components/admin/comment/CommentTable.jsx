import Table from "../../table/Table";
import CommentRow from './CommentRow';

export default function CommentTable({ comments }) {
  console.log(comments, "comments");
  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>Name</th>
        <th>Email</th>
        <th>Comments</th>
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
