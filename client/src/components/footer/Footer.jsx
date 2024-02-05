import { PhoneIcon } from "@heroicons/react/16/solid";

export function Footer() {
  return (
    <div className="fixed bottom-0 left-0 right-0 w-full bg-k-brown py-3 px-4 flex justify-center items-center">
      <div className="flex justify-center items-center gap-x-2">
        <div className="w-7 text-K-xlightBrown">
          <PhoneIcon />
        </div>
        <p className="text-K-xlightBrown">090 – 240 40</p>
      </div>
    </div>
  );
}
