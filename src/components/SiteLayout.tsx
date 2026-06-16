import { Link, Outlet } from "@tanstack/react-router";
import { Github, Linkedin, Instagram } from "lucide-react";

const navItems = [
  { label: "Home", to: "/" as const },
  { label: "About", to: "/about" as const },
  { label: "Skills", to: "/skills" as const },
  { label: "Contact", to: "/contact" as const },
];

export function SiteLayout() {
  return (
    <div className="flex h-screen flex-col overflow-hidden bg-background text-foreground">
      <header className="w-full shrink-0">
        <nav className="mx-auto flex max-w-6xl items-center justify-center gap-8 px-6 pt-8 pb-4 text-base md:gap-12 md:pt-10 md:text-lg">
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              activeOptions={{ exact: true }}
              activeProps={{ className: "text-accent" }}
              className="inline-block text-foreground/90 transition-all duration-200 hover:text-accent hover:scale-110"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </header>

      <main className="flex min-h-0 flex-1 flex-col overflow-y-auto">
        <Outlet />
      </main>

      <footer className="shrink-0 border-t border-border py-3">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 text-xs text-muted md:flex-row">
          <p>© {new Date().getFullYear()} Nikhil Kumar Raushan</p>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/nkraushan8421/" aria-label="LinkedIn" className="hover:text-accent"><Linkedin className="h-4 w-4" /></a>
            <a href="https://github.com/nikhilkr2" aria-label="GitHub" className="hover:text-accent"><Github className="h-4 w-4" /></a>
            <a href="https://www.instagram.com/nikhilkr_2/" aria-label="Instagram" className="hover:text-accent"><Instagram className="h-4 w-4" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
