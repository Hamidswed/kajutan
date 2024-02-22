export function MenuItem({ item }) {
  return (
    <div className="w-full flex justify-between items-center bg-white rounded-md p-2 gap-x-2">
      <div className="w-1/2 rounded-md overflow-hidden">
        <img src={item.image} alt={item.title} />
      </div>
      <div className="w-full flex justify-between py-2 items-center">
        <div className="flex-1">
          <h2>{item.title}</h2>
          <p className="text-sm text-k-lightBrown">{item.ingredient}</p>
        </div>
        <p className="text-k-brown font-bold">
          {item.price} <span className="text-sm">kr</span>
        </p>
      </div>
    </div>
  );
}
