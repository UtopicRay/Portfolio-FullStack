import emailjs from "@emailjs/browser";
import { useState } from "react";

export function useContact(form: any) {
  const [status, setStatus] = useState<string>();
  const [isLoading, setLoading] = useState<boolean>();
  const [error, setError] = useState<string>();
  const template = "template_7fiu3mq";
  const service = "service_yen6efm";
  const publicKey = "aKSBVKOiowvq4CCQk";
  const sendEmail = (e: any) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(service, template, form.current, {
        publicKey: publicKey,
      })
      .then((result) => setStatus((prev) => (prev = result.text)))
      .catch((e: Error) => {
        setError(e.message);
      })
      .finally(() => setLoading(false));
  };

  return {
    error,
    isLoading,
    status,
    sendEmail,
  };
}
