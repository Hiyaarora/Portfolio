import { useEffect, useState } from "react";
import { projects, type Project } from "../data/content";
import { ArrowUpRight, Chip, Reveal, Section } from "./ui";

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M12 .5a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1-.7.1-.7.1-.7 1.2.1 1.8 1.2 1.8 1.2 1 1.8 2.7 1.3 3.4 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-5.9 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0C17.6 5 18.6 5.3 18.6 5.3c.7 1.7.3 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.2v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .5Z" />
    </svg>
  );
}

function Modal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[60] flex items-start justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-sm sm:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={project.name}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="my-auto w-full max-w-2xl rounded-lg border border-hairline bg-surface"
      >
        <div className="flex items-start justify-between gap-6 border-b border-hairline p-7">
          <div>
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
              {project.category}
            </span>
            <h3 className="mt-2.5 text-2xl font-semibold tracking-tight">{project.name}</h3>
          </div>
          <button
            onClick={onClose}
            aria-label="Close"
            className="shrink-0 rounded p-1 text-muted transition-colors hover:text-text"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>
        </div>

        <div className="p-7">
          <p className="leading-relaxed text-muted">{project.description}</p>

          <h4 className="mt-8 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
            Key Features
          </h4>
          <ul className="mt-4 space-y-3">
            {project.features.map((f) => (
              <li key={f} className="flex gap-3.5">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                <span className="text-sm leading-relaxed text-text">{f}</span>
              </li>
            ))}
          </ul>

          <h4 className="mt-8 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
            Technologies Used
          </h4>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <Chip key={t}>{t}</Chip>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap gap-3 border-t border-hairline pt-7">
            <a
              href={project.code}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-hairline px-5 py-2.5 font-mono text-[13px] transition-colors hover:border-accent hover:text-accent"
            >
              <GithubIcon /> Code
            </a>
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-2.5 font-mono text-[13px] text-[#0d0d0d] transition-opacity hover:opacity-90"
              >
                Live Demo <ArrowUpRight />
              </a>
            )}
            {project.liveNote && (
              <span className="self-center font-mono text-[11px] text-faint">
                ({project.liveNote})
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [open, setOpen] = useState<Project | null>(null);

  return (
    <>
      <Section
        id="projects"
        label="Projects"
        title="Featured Projects"
        intro="Things I have built. Click any project for the full breakdown."
      >
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.name} delay={(i % 3) * 80}>
              <button
                onClick={() => setOpen(p)}
                className="group flex h-full w-full flex-col rounded-lg border border-hairline bg-surface p-6 text-left transition-colors hover:border-accent-dim hover:bg-surface-2"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-lg font-semibold tracking-tight transition-colors group-hover:text-accent">
                    {p.name}
                  </h3>
                  <span className="shrink-0 font-mono text-[11px] text-faint">{p.year}</span>
                </div>

                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{p.hook}</p>

                <div className="mt-6 flex flex-wrap gap-1.5">
                  {p.tech.slice(0, 3).map((t) => (
                    <Chip key={t}>{t}</Chip>
                  ))}
                  {p.tech.length > 3 && (
                    <span className="self-center font-mono text-[11px] text-faint">
                      +{p.tech.length - 3} more
                    </span>
                  )}
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-hairline pt-4">
                  <span className="inline-flex items-center gap-2 font-mono text-[11px] text-faint">
                    <span
                      className="h-1.5 w-1.5 rounded-full"
                      style={{
                        background:
                          p.status === "Actively maintained"
                            ? "var(--color-accent)"
                            : "var(--color-faint)",
                      }}
                    />
                    {p.status}
                  </span>
                  <span className="font-mono text-[11px] text-faint transition-colors group-hover:text-accent">
                    {p.category}
                  </span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </Section>

      {open && <Modal project={open} onClose={() => setOpen(null)} />}
    </>
  );
}
