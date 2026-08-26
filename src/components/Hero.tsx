import { useEffect, useState } from "react";
import { profile } from "../data/content";
import { ArrowUpRight, Dot } from "./ui";

/* Ojasv-style typewriter that types, holds, deletes, then moves to the next role. */
function useTypewriter(words: string[]) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    const done = !deleting && text === word;
    const cleared = deleting && text === "";

    let delay = deleting ? 45 : 85;
    if (done) delay = 1800;
    if (cleared) delay = 300;

    const t = setTimeout(() => {
      if (done) {
        setDeleting(true);
      } else if (cleared) {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
      } else {
        setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1));
      }
    }, delay);

    return () => clearTimeout(t);
  }, [text, deleting, index, words]);

  return text;
}

export default function Hero() {
  const typed = useTypewriter(profile.roles);

  return (
    <section id="top" className="relative overflow-hidden">
      {/* ambient warm glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-12rem] h-[42rem] w-[42rem] -translate-x-1/2 rounded-full opacity-[0.10] blur-[110px]"
        style={{ background: "radial-gradient(circle, var(--color-accent) 0%, transparent 68%)" }}
      />

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col items-center justify-center px-6 pb-24 pt-20 text-center">
        <div className="inline-flex items-center gap-2.5 rounded-full border border-hairline bg-surface px-4 py-1.5">
          <Dot />
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
            {profile.location}
          </span>
        </div>

        <h1 className="mt-6 text-3xl font-bold leading-[1.08] tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
          Hi, I&apos;m <span className="text-accent">{profile.name.split(" ")[0]}</span>
          <span className="text-accent"> {profile.name.split(" ")[1]}</span>
        </h1>

        <p className="mt-4 flex min-h-[2.2rem] items-center justify-center font-mono text-lg text-text sm:text-xl md:text-2xl">
          {typed}
          <span className="caret ml-0.5 font-normal text-accent">|</span>
        </p>

        <p className="mt-4 max-w-xl text-base text-muted">
          {profile.tagline}
        </p>

        <div className="mt-6 flex max-w-2xl flex-wrap items-center justify-center gap-2">
          {profile.heroChips.map((c) => (
            <span
              key={c}
              className="rounded-full border border-hairline bg-surface px-3.5 py-1.5 font-mono text-[11px] text-muted"
            >
              {c}
            </span>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#contact"
            className="rounded-md bg-accent px-6 py-3 font-mono text-sm text-[#0d0d0d] transition-opacity hover:opacity-90"
          >
            Get In Touch
          </a>
          <a
            href="#projects"
            className="rounded-md border border-hairline bg-surface px-6 py-3 font-mono text-sm transition-colors hover:border-accent hover:text-accent"
          >
            View My Work
          </a>
          <a
            href={profile.resumeFile}
            download
            className="inline-flex items-center gap-2 px-3 py-3 font-mono text-sm text-muted transition-colors hover:text-text"
          >
            Résumé <ArrowUpRight />
          </a>
        </div>

        <div className="mt-9 flex items-center gap-6">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub"
             className="text-faint transition-colors hover:text-accent">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
              <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0C17.6 5 18.6 5.3 18.6 5.3c.7 1.7.3 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z" />
            </svg>
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn"
             className="text-faint transition-colors hover:text-accent">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
              <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C20.6 8.65 21 11 21 14.1V21h-4v-6.1c0-1.45-.03-3.3-2-3.3s-2.3 1.57-2.3 3.2V21H9z" />
            </svg>
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email"
             className="text-faint transition-colors hover:text-accent">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7">
              <rect x="2.5" y="4.5" width="19" height="15" rx="2" />
              <path d="m3 6 9 6 9-6" />
            </svg>
          </a>
        </div>

      </div>

      {/* pinned to the hero section, not the content column, so it never falls below the fold */}
      <a
        href="#about"
        className="group absolute inset-x-0 bottom-6 z-10 mx-auto flex w-fit flex-col items-center gap-2 text-faint transition-colors hover:text-accent"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.25em]">Scroll</span>
        <svg viewBox="0 0 24 24" className="h-4 w-4 animate-bounce" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M6 13l6 6 6-6" />
        </svg>
      </a>
    </section>
  );
}
