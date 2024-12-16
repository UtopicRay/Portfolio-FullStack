import { useRef } from "react";
import { useContact } from "../hooks/useContact";
import Button from "./Button";

function Contacto() {
  const form = useRef<any>();
  const { sendEmail, isLoading, error, status } = useContact(form);

  return (
    <section
      className="max-container padding-container flex flex-col justify-center items-center"
      id="contact"
    >
      <h2 className="fade-down">Comencemos a hablar!!</h2>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-[600px] mx-auto mt-2"
      >
        <input
          type="text"
          name="from_name"
          placeholder="Su Nombre... "
          className="my-2 py-5"
          required
        />
        <input
          type="email"
          placeholder="example@gmail.com"
          name="from_email"
          className="my-2 py-5"
          required
        />
        <textarea name="message" className="my-2 py-5" />
        <Button label="Envie su mensaje" type="submit" />
      </form>
      <div className="mx-auto px-6 place-items-center mt-4">
        {isLoading ? <Loading /> : ""}
        {error ? <Error error={error} /> : ""}
        {status === "OK" ? (
          <h2 className="text-green-400 text-center">
            Mensaje enviado vía gmail
          </h2>
        ) : (
          ""
        )}
      </div>
    </section>
  );
}
export default Contacto;

function Loading() {
  return (
    <h2 className="text-yellow-400  text-center">...Ejecutando peticion</h2>
  );
}
function Error({ error }: { error: string }) {
  return <h2 className="text-red-400  text-center">{error}</h2>;
}
