import Kajutan from "../../assets/omkajutan.jpg";
import Kajutan2 from "../../assets/omkajutan2.jpg";

export function AboutUs() {
  return (
    <div className="h-screen lg:max-w-screen-lg">
      <h1 className="text-white flex justify-center items-center gap-x-2 mb-6">
        <span className="md:text-2xl">Om</span>
        <span className="font-yellotail text-2xl md:text-4xl">
          {" "}
          Kajutan
        </span>{" "}
      </h1>
      <div className="sm:flex sm:gap-x-4 lg:gap-x-6 flex flex-col sm:flex-row sm:justify-center">
        <div className="sm:w-1/2 flex flex-col items-center justify-stretch gap-y-3 md:w-1/3">
          <div className="w-full rounded-md overflow-hidden mb-2 sm:max-w-screen-sm sm:mb-0">
            <img src={Kajutan} alt="kajutan" className="w-full" />
          </div>
          <div className="hidden sm:block w-full rounded-md overflow-hidden mb-6 sm:max-w-screen-sm">
            <img src={Kajutan2} alt="kajutan" className="w-full" />
          </div>
        </div>
        <div className="mt-4 text-white sm:leading-7 sm:w-1/2 sm:mt-0">
          <span className="flex-1">
            Restaurang <strong>Kajutan</strong> finner ni i Holmsunds{" "}
            <span className="text-k-xlightBrown">“Old Town”</span>. Under mitten
            av 1900-talet vandrade tusentals personer årligen efter gatan där nu
            <strong>Kajutan</strong> är belägen. Från Djupviks hamn har personer
            från alla världens hörn promenerat längs
            <span className="text-k-xlightBrown">“Gamla Storgatan”</span> som
            den numera heter. Denna gata var en gång i tiden som
            <span className="text-k-xlightBrown">“stråget”</span> i Köpenhamn.
            Ett antal cafer, biografer, kiosker, butiker samt matställen kunde
            man finna efter gatan.&nbsp;
          </span>
          <span className="flex-1">
            Där vi idag har restaurangen så minns äldre genuina skärgårdsbor
            huset där man en gång i tiden köpte sina fina kläder i orten. Från
            <span className="text-k-xlightBrown">“Nordbrandts”</span> med start
            i detta hus på 30-talet,
            <span className="text-k-xlightBrown">“Wincents Herrekipering”</span>
            från 50-talet och därefter några år under namnet
            <span className="text-k-xlightBrown">“Chicago”</span> som då var en
            sportaffär. Restaurang <strong>Kajutan</strong> är därför nu stolt
            att sedan många år tillbaka servera allt ifrån pizzor och dagens
            lunch till goda a la carte middagar med smakfullt vin i ett
            historiskt hus efter en gata med anor som få idag kan föreställa
            sig.
          </span>
        </div>
      </div>
      <div className="h-24"></div>
    </div>
  );
}
