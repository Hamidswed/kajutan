import Menu1 from "../../assets/menu/1.jpg";
import Menu2 from "../../assets/menu/2.jpg";
import Menu3 from "../../assets/menu/3.jpg";
import Menu4 from "../../assets/menu/4.jpg";

export function MenuList() {
  return (
    <div className="px-4 flex flex-col items-center gap-y-3 mt-5">
      <div className="border border-k-brown">
        <img src={Menu1} alt="menu1" />
      </div>
      <div className="border border-k-brown">
        <img src={Menu2} alt="menu2" />
      </div>
      <div className="border border-k-brown">
        <img src={Menu3} alt="menu3" />
      </div>
      <div className="border border-k-brown">
        <img src={Menu4} alt="menu4" />
      </div>
      <div className="h-24"></div>
    </div>
  );
}
