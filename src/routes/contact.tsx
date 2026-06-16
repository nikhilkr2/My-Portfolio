import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Nikhil Kumar Raushan" },
      { name: "description", content: "Get in touch with Nikhil for freelance or internship opportunities." },
      { property: "og:title", content: "Contact Nikhil Kumar Raushan" },
      { property: "og:description", content: "Open to freelance and internship opportunities." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  emailjs.send(
    "service_eryghzm",
    "template_fjpepub",
    {
      from_name: form.name,
      from_email: form.email,
      message: form.message,
    },
    "xECHERAmQ2Cy7ltUL"
  ).then(() => {
    alert("Message sent successfully!");
    setForm({ name: "", email: "", message: "" });
  }).catch(() => {
    alert("Failed to send message!");
  });
};

  const inputClass =
    "mt-1 w-full rounded-md bg-white px-3 py-2 text-sm text-[#141a2e] outline-none ring-2 ring-transparent focus:ring-accent";

  return (
    <section className="mx-auto flex w-full max-w-xl flex-1 flex-col justify-center px-6 py-4">
      <h1 className="text-center text-xl font-light text-foreground/90 md:text-2xl">
        Heyo, lets connect
      </h1>

      <form onSubmit={handleSubmit} className="mt-6 space-y-3">
        <div>
          <label htmlFor="name" className="text-xs font-medium">Name:</label>
          <input
            id="name"
            required
            type="text"
            maxLength={100}
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="email" className="text-xs font-medium">Email:</label>
          <input
            id="email"
            required
            type="email"
            maxLength={255}
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="message" className="text-xs font-medium">Your Message:</label>
          <textarea
            id="message"
            required
            rows={3}
            maxLength={1000}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            className={inputClass}
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-md border border-foreground/60 px-6 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:bg-accent hover:text-white"
        >
          Send
        </button>
      </form>
    </section>
  );
}
