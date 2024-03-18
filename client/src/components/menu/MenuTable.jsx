import { useState } from "react";
import Table from "../table/Table";
import Modal from "../../ui/Modal";
import FoodCard from "./FoodCard";

export default function MenuTable({ filteredData }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [foodCard, setIsFoodCard] = useState({});


  return (
    <div>
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
                setIsModalOpen(true);
                setIsFoodCard(food);
              };
              return (
                <Table.Row
                  key={food._id}
                  onOpen={openModalHandler}
                >
                  <td className="w-1/4 p-1 min-[400px]:p-2 md:p-3 min-[450px]:w-[25%] min-[600px]:w-[20%] md:w-[15%]">
                    <img src={food.image} alt={food.title} />
                  </td>
                  <td>
                    {food.title}
                    <br />
                    <span className="text-k-brown text-xs">
                      {food.category}
                    </span>
                  </td>
                  <td>{food.price}</td>
                </Table.Row>
              );
            })}
        </Table.Body>
      </Table>
      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(!isModalOpen)}
        title={foodCard.title}
      >
        <FoodCard food={foodCard} />
      </Modal>
    </div>
  );
}
