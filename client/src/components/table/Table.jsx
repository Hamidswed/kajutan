export function Table({ filteredData, searchItem }) {
  const found = filteredData.map((item) =>
    item.menu.filter((food) =>
      food.title.toLowerCase().includes(searchItem.toLowerCase())
    )
  );

  return (
    <div className="overflow-x-auto">
      <table>
        <thead>
          <tr className="text-start">
            <th>#</th>
            <th>Titeln</th>
            <th>Kategori</th>
            <th>Priset(kr)</th>
          </tr>
        </thead>
        <tbody className="text-white">
          {found?.length !== 0 &&
            found?.map((item) => {
              return item.map((food) => {
                return (
                  <tr key={food.id}>
                    <td className="w-full p-0 min-[400px]:p-2 md:p-3 lg:p-4 min-[450px]:w-[30%] min-[600px]:w-[25%] md:w-[20%] lg:w-[15%]">
                      <img src={food.image} alt={food.title} className="" />
                    </td>
                    <td>{food.title}</td>
                    <td>{food.category}</td>
                    <td>{food.price}</td>
                  </tr>
                );
              });
            })}
        </tbody>
      </table>
    </div>
  );
}
