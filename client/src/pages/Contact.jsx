import { ContactOss } from "../components/contact/ContactOss";

export function Contact() {
  return (
    <div className="mt-44 px-4 pb-24 text-center">
      <div className="text-white">
        <h1 className="text-xl mb-2 text-k-xlightBrown">Let's stay in touch</h1>
        <p>Har ni några frågor eller vill ge oss feedback, hör gärna av er!</p>
      </div>
      <ContactOss />
    </div>
  );
}
