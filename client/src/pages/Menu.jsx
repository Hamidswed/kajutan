import { MenuList } from "../components/menu/MenuList";

export function Menu() {
  return (
    <div className="flex flex-col items-center gap-y-4 py-4">
      <h2 className="font-yellotail text-3xl text-white mt-24">Kajutan</h2>
      <MenuList />
    </div>
  );
}
