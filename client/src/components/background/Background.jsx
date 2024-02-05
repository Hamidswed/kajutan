import Back from "../../assets/back.jpg";

export function Background() {
  return (
    <div className="fixed inset-0 -z-10 ">
      <img className="aspect-w-1 aspect-h-4" src={Back} alt="back" />
    </div>
  );
}
