import useModalStore from "../../store/modalStore";

export function Table({ filteredData, setClickedFood }) {
  const { open, setOpen } = useModalStore();

  return (
    <div className="overflow-x-auto">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Titeln</th>
            <th>kr</th>
          </tr>
        </thead>
        <tbody className="text-white">
          {filteredData?.length !== 0 &&
            filteredData?.map((food) => {
              const openModalHandler = () => {
                setOpen();
                setClickedFood(food);
              };
              return (
                <tr
                  key={food._id}
                  onClick={openModalHandler}
                  className="cursor-pointer"
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
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
