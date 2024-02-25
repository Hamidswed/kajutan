import { MenuList } from "../components/menu/MenuList";

export function Menu() {
  return (
    <div className="flex flex-col items-center gap-y-4 py-4 container lg:max-w-screen-lg m-auto">
      <h2 className="font-yellotail text-3xl text-white mt-24 md:text-4xl lg:text-5xl lg:mt-32">
        Kajutan
      </h2>
      <MenuList />
    </div>
  );
}
