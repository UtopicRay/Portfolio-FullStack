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
      <h2>Comencemos a hablar!!</h2>
      <form
        ref={form}
        onSubmit={sendEmail}
        className="max-w-[600px] mx-auto mt-2"
      >
        <input
          type="text"
          name="from_name"
          placeholder="Su Nombre... "
          className="my-2"
          required
        />
        <input
          type="email"
          placeholder="example@gmail.com"
          name="from_email"
          className="my-2"
          required
        />
        <textarea name="message" className="my-2" />
        <Button label="Envie su mensaje" type="submit" />
      </form>
      <div className="mx-auto px-6 place-items-center">
        {isLoading ? (
          <h2 className="text-yellow-400  text-center">
            ...Ejecutando peticion
          </h2>
        ) : (
          ""
        )}
        {error ? <h2 className="text-red-400  text-center">{error}</h2> : ""}
        {status === "OK" ? (
          <h2 className="text-green-400 text-center">
            Mensaje enviado via gmail
          </h2>
        ) : (
          ""
        )}
      </div>
    </section>
  );
}
export default Contacto;
