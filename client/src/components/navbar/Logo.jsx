import Logo1 from "../../assets/logo/kajutan1.svg";
import Logo2 from "../../assets/logo/kajutan2.svg";
import Logo3 from "../../assets/logo/kajutan3.svg";

export function Logo() {
  return (
    <div>
      <img className="absolute" src={Logo1} alt="logo" />
      <img className="absolute animate-spinSlow" src={Logo2} alt="logo" />
      <img className="absolute animate-wave" src={Logo3} alt="logo" />
    </div>
  );
}
