import useModalStore from "../../store/modalStore";
import Table from "../table/Table";

export default function MenuTable({ filteredData }) {
  const { setOpen, setFood } = useModalStore();
  return (
    <Table>
      <Table.Header>
        <th>#</th>
        <th>Titeln</th>
        <th>kr</th>
      </Table.Header>
      <Table.Body>
        {filteredData?.length !== 0 &&
          filteredData?.map((food) => {
            const openModalHandler = () => {
              setOpen();
              setFood(food);
            };
            return (
              <Table.Row
                key={food._id}
                onOpen={openModalHandler}
                className="cursor-pointer"
              >
                <td className="w-1/4 p-1 min-[400px]:p-2 md:p-3 min-[450px]:w-[25%] min-[600px]:w-[20%] md:w-[15%]">
                  <img src={food.image} alt={food.title} />
                </td>
                <td>
                  {food.title}
                  <br />
                  <span className="text-k-brown text-xs">{food.category}</span>
                </td>
                <td>{food.price}</td>
              </Table.Row>
            );
          })}
      </Table.Body>
    </Table>
  );
}
