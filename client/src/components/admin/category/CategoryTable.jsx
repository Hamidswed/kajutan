import Table from "../../table/Table";
import CategoryRow from "./CategoryRow";

export default function CategoryTable({ categories }) {
  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>Category</th>
        <th>Ingår</th>
        <th className="text-center">...</th>
      </Table.Header>
      <Table.Body>
        {categories?.length !== 0 &&
          categories?.map((category) => {
            return <CategoryRow key={category._id} category={category} />;
          })}
      </Table.Body>
    </Table>
  );
}
