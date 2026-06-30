import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Nikhil Kumar Raushan" },
      { name: "description", content: "About Nikhil — a passionate design and development student from India." },
      { property: "og:title", content: "About Nikhil Kumar Raushan" },
      { property: "og:description", content: "Design and development student creating beautiful interfaces." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <section className="mx-auto grid w-full max-w-6xl flex-1 content-center gap-8 px-6 py-6 md:grid-cols-2 md:gap-24 lg:gap-32">
      {/* Left column — bio */}
      <div>
        <h1 className="inline-block border-b-2 border-foreground pb-2 text-2xl font-bold leading-tight md:text-4xl">
          UI/UX &amp;<br />Frontend Designer
        </h1>
        <p className="mt-5 text-sm leading-relaxed text-foreground/80 md:text-base">
          I'm Nikhil, a design and development student based in India. I'm
          passionate about crafting clean, user-friendly interfaces and turning
          them into real, working products with code.
        </p>
        <p className="mt-3 text-sm leading-relaxed text-foreground/80 md:text-base">
          Currently I'm sharpening my skills in UI/UX, frontend development and
          graphic design — building projects and looking for freelance and
          internship opportunities.
        </p>
      </div>

      {/* Right column — meta lists */}
      <div className="space-y-5 md:pl-16 lg:pl-24">
        <InfoBlock title="Nationality" items={["Indian"]} />
        <InfoBlock title="Hobbies" items={["Coding", "Sketching", "Reading", "Designing"]} />
        <InfoBlock
          title="Language proficiencies"
          items={["Hindi (Native)", "English", "Bhojpuri"]}
        />
      </div>
    </section>
  );
}

function InfoBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h2 className="text-base font-bold md:text-lg">{title}</h2>
      <ul className="mt-1.5 space-y-1 text-sm text-foreground/80">
        {items.map((i) => (
          <li key={i}>• {i}</li>
        ))}
      </ul>
    </div>
  );
}
