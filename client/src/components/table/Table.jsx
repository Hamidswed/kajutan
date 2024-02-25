export function Table({ filteredData, searchItem }) {
  const found = filteredData.map((item) =>
    item.menu.filter((food) =>
      food.title.toLowerCase().includes(searchItem.toLowerCase())
    )
  );

  console.log(found, "found");
  return (
    <div className="overflow-x-auto mb-4 px-4">
      <table className="w-full">
        <thead>
          <tr className="text-start">
            <th>Titeln</th>
            <th>Kategori</th>
            <th>Priset</th>
          </tr>
        </thead>
        <tbody className="text-white">
          {found?.length !== 0 &&
            found?.map((item) => {
              return item.map((food) => {
                return (
                  <tr key={food.id}>
                    {/* <td className="">
                      <img src={food.image} alt={food.title} className="" />
                    </td> */}
                    <td>{food.title}</td>
                    <td>{food.category}</td>
                    <td>{food.price} kr</td>
                  </tr>
                );
              });
            })}
        </tbody>
      </table>
    </div>
  );
}
