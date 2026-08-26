import { useEffect, useState } from "react";
import { navItems, profile } from "../data/content";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-hairline bg-[#0d0d0dcc] backdrop-blur-md"
          : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-mono text-sm tracking-tight">
          <span className="text-text">hiya</span>
          <span className="text-accent">.</span>
          <span className="text-text">arora</span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="group font-mono text-[13px] text-muted transition-colors hover:text-text"
              >
                <span className="mr-1.5 text-[11px] text-faint transition-colors group-hover:text-accent">
                  {item.num}
                </span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={profile.resumeFile}
            download
            className="hidden font-mono text-[13px] text-muted transition-colors hover:text-text sm:block"
          >
            Résumé
          </a>
          <a
            href="#contact"
            className="rounded-md border border-hairline bg-surface px-4 py-2 font-mono text-[13px] transition-colors hover:border-accent hover:text-accent"
          >
            Get in touch
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="lg:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
              {open ? <path d="M5 5l14 14M19 5L5 19" /> : <path d="M4 8h16M4 16h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <ul className="border-t border-hairline bg-bg px-6 py-4 lg:hidden">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => setOpen(false)}
                className="block py-2.5 font-mono text-sm text-muted"
              >
                <span className="mr-2 text-faint">{item.num}</span>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
