import { createFileRoute } from "@tanstack/react-router";
import { Github, Linkedin, Instagram, Twitter, Mail, Dribbble } from "lucide-react";
import { lazy, Suspense, useEffect, useState } from "react";
import heroAnim from "@/assets/developer-skills.json";
console.log(heroAnim);

const Lottie = lazy(() => import("lottie-react"));

const SOCIALS = [
  { Icon: Instagram, href: "https://www.instagram.com/nikhilkr_2/", label: "Instagram" },
  { Icon: Twitter, href: "https://x.com/NK_Raushan", label: "Twitter" },
  { Icon: Linkedin, href: "https://www.linkedin.com/in/nkraushan8421/", label: "LinkedIn" },
  { Icon: Github, href: "https://github.com/nikhilkr2", label: "GitHub" },
  { Icon: Dribbble, href: "https://dribbble.com/nikhil-kumar-raushan", label: "Dribbble" },
  { Icon: Mail, href: "mailto:nikhilkumarraushan@gmail.com", label: "Email" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nikhil Kumar Raushan — UI/UX Designer & Frontend Developer Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Nikhil Kumar Raushan — UI/UX Designer, Frontend Developer, and Graphic Designer crafting modern, user-focused digital experiences.",
      },
      { name: "keywords", content: "Nikhil Kumar Raushan, UI/UX Designer, Frontend Developer, Graphic Designer, Portfolio" },
      { property: "og:title", content: "Nikhil Kumar Raushan — UI/UX & Frontend Designer" },
      { property: "og:description", content: "UI/UX Designer | Frontend Developer | Graphic Designer" },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Nikhil Kumar Raushan — Portfolio" },
      { name: "twitter:description", content: "UI/UX Designer | Frontend Developer | Graphic Designer" },
    ],
  }),
  component: Home,
});

function Home() {
  const [animData] = useState(heroAnim);

  return (
    <div className="flex flex-1 flex-col justify-center">
      <section className="mx-auto flex w-full max-w-6xl flex-col-reverse items-center gap-6 px-6 py-4 md:flex-row md:gap-8 md:py-6">
        <div className="flex-1 text-center md:text-left">
          <p className="text-base text-muted md:text-lg">Hi, I'm</p>
          <h1 className="mt-1 text-4xl font-bold leading-[1.05] tracking-tight md:text-6xl">
            NIKHIL<br />KUMAR<br />RAUSHAN
          </h1>
          <p className="mt-4 text-base text-foreground/80 md:text-lg">
            UI/UX Designer <span className="text-accent">|</span> Frontend Developer <span className="text-accent">|</span> Graphic Designer
          </p>
          <a
            href="/Nikhil CV.pdf"
            className="mt-5 inline-block rounded-md border border-foreground/70 px-6 py-2.5 text-sm font-medium transition-colors hover:border-accent hover:bg-accent hover:text-background md:text-base"
          >
            View Resume
          </a>
        </div>
        <div className="flex-1">
          <div className="mx-auto aspect-square w-[100px] sm:w-[140px] md:w-[200
          px] lg:w-[240px]">
            {animData ? (
              <Suspense fallback={null}>
                <Lottie animationData={animData} loop autoplay />
              </Suspense>
            ) : null}
          </div>
        </div>
      </section>

      <div className="flex justify-center gap-5 pb-2 md:gap-6 md:pb-4 mt-25">
        {SOCIALS.map(({ Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-muted transition-all duration-200 hover:scale-125 hover:text-accent"
          >
            <Icon className="h-6 w-6" />
          </a>
        ))}
      </div>
    </div>
  );
}
