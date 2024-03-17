import Table from "../table/Table";
import MenuRow from "./MenuRow";

export default function MenuTable({ filteredData }) {
  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>Titeln</th>
        <th>kr</th>
        <th className="text-center">...</th>
      </Table.Header>
      <Table.Body>
        {filteredData?.length !== 0 &&
          filteredData?.map((food) => {
            return <MenuRow key={food._id} food={food} />;
          })}
      </Table.Body>
    </Table>
  );
}
