export function Body() {
  return (
    <div className="px-4 mt-12">
      <div>
        <div className="text-k-lightBrown relative flex flex-col items-center">
          <h2 className="bg-neutral-800 px-4 absolute -top-3">Öppettider</h2>
          <div className="border border-k-lightBrown w-full"></div>
        </div>
        <div className="flex justify-center text-white gap-x-5 mt-6">
          <div className="text-K-xlightBrown">
            <p className="text-white">måndag - torsdag </p>
            <p>fredag</p>
            <p>lördag</p>
            <p>söndag</p>
          </div>
          <div className="text-K-xlightBrown">
            <p className="text-white">10:00 — 20:00</p>
            <p>10:00 — 23:00</p>
            <p>12:00 — 23:00</p>
            <p>12:00 — 20:00</p>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}
