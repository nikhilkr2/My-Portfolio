import { createFileRoute } from "@tanstack/react-router";
import {
  SiFigma,
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiC,
  SiCplusplus,
  SiPython,
} from "react-icons/si";
import { Image as ImageIcon, PenTool, Code2 } from "lucide-react";
import { FaJava } from "react-icons/fa";
import type { IconType } from "react-icons";

export const Route = createFileRoute("/skills")({
  head: () => ({
    meta: [
      { title: "Skills — Nikhil Kumar Raushan" },
      {
        name: "description",
        content:
          "Skills: Figma, HTML, CSS, JavaScript, React, Photoshop, Illustrator, C, C++, Java, Python.",
      },
      { property: "og:title", content: "Skills — Nikhil Kumar Raushan" },
      { property: "og:description", content: "Tools and technologies Nikhil works with." },
      { property: "og:url", content: "/skills" },
    ],
    links: [{ rel: "canonical", href: "/skills" }],
  }),
  component: Skills,
});

type Skill = { name: string; Icon: IconType; color: string };

const groups: { label: string; items: Skill[] }[] = [
  {
    label: "Design",
    items: [
      { name: "Figma", Icon: SiFigma, color: "#F24E1E" },
      { name: "Photoshop", Icon: ImageIcon, color: "#31A8FF" },
      { name: "Illustrator", Icon: PenTool, color: "#FF9A00" },
    ],
  },
  {
    label: "Web Dev",
    items: [
      { name: "HTML", Icon: SiHtml5, color: "#E34F26" },
      { name: "CSS", Icon: SiCss, color: "#1572B6" },
      { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
      { name: "React", Icon: SiReact, color: "#61DAFB" },
      { name: "Tailwind", Icon: SiTailwindcss, color: "#38BDF8" },
    ],
  },
  {
    label: "Languages",
    items: [
      { name: "C", Icon: SiC, color: "#A8B9CC" },
      { name: "C++", Icon: SiCplusplus, color: "#00599C" },
      { name: "Java", Icon: FaJava, color: "#E76F00" },
      { name: "Python", Icon: SiPython, color: "#3776AB" },
    ],
  },
  {
    label: "Other Skills",
    items: [
      { name: "Git", Icon: SiGit, color: "#F05032" },
      { name: "GitHub", Icon: SiGithub, color: "#ffffff" },
    ],
  },
];

// Orbit visualization — picks representative skills and floats them around a core.
const orbitIcons: Skill[] = [
  { name: "React", Icon: SiReact, color: "#61DAFB" },
  { name: "JavaScript", Icon: SiJavascript, color: "#F7DF1E" },
  { name: "Figma", Icon: SiFigma, color: "#F24E1E" },
  { name: "Python", Icon: SiPython, color: "#3776AB" },
  { name: "Tailwind", Icon: SiTailwindcss, color: "#38BDF8" },
  { name: "Java", Icon: FaJava, color: "#E76F00" },
  { name: "GitHub", Icon: SiGithub, color: "#ffffff" },
  { name: "HTML", Icon: SiHtml5, color: "#E34F26" },
];

function Skills() {
  return (
    <section className="mx-auto grid w-full max-w-6xl flex-1 content-center items-center gap-6 px-6 py-3 md:grid-cols-2 md:gap-10">
      <div>
        <h1 className="text-xl font-bold md:text-2xl">My Tech Stack</h1>

        <div className="mt-4 space-y-3">
          {groups.map((g) => (
            <div key={g.label} className="flex items-center gap-6">
              <div className="w-28 shrink-0 text-sm text-foreground/90 md:text-base">
                {g.label}
              </div>
              <div className="flex flex-wrap items-center gap-3">
                {g.items.map(({ name, Icon, color }) => (
                  <span
                    key={name}
                    title={name}
                    aria-label={name}
                    className="transition-transform hover:scale-110"
                  >
                    <Icon size={24} color={color} />
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="hidden md:block">
        <SkillsOrbit />
      </div>
    </section>
  );
}

function SkillsOrbit() {
  const count = orbitIcons.length;
  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[280px] lg:max-w-[320px]"
      aria-hidden="true"
    >
      {/* soft radial glow blended with background */}
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,color-mix(in_oklab,var(--accent)_22%,transparent),transparent_65%)]" />

      {/* orbit rings */}
      <div className="absolute inset-[10%] rounded-full border border-border/60" />
      <div className="absolute inset-[26%] rounded-full border border-border/40" />
      <div className="absolute inset-[42%] rounded-full border border-border/30" />

      {/* center core */}
      <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-accent/50 bg-card shadow-[0_0_30px_-4px_var(--accent)]">
        <Code2 className="h-6 w-6 text-accent" />
      </div>

      {/* rotating ring of skill icons */}
      <div className="absolute inset-0 animate-[spin_22s_linear_infinite]">
        {orbitIcons.map(({ name, Icon, color }, i) => {
          const angle = (i / count) * 2 * Math.PI;
          const r = 44; // % from center
          const x = 50 + r * Math.cos(angle);
          const y = 50 + r * Math.sin(angle);
          return (
            <span
              key={name}
              title={name}
              className="absolute flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-xl border border-border bg-card/80 shadow-md backdrop-blur-sm animate-[spin_22s_linear_infinite_reverse]"
              style={{ left: `${x}%`, top: `${y}%` }}
            >
              <Icon size={20} color={color} />
            </span>
          );
        })}
      </div>
    </div>
  );
}
