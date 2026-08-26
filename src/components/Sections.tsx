import { about, education, experience, openSource, profile, skills } from "../data/content";
import { ArrowUpRight, Chip, Dot, Reveal, Section } from "./ui";

/* ------------------------------- About ------------------------------- */
export function About() {
  return (
    <Section
      id="about"
      label="About"
      title="About Me"
      intro="Get to know more about who I am, what I do, and what drives my interest in building."
    >
      <div className="grid gap-14 md:grid-cols-[1.35fr_1fr]">
        <Reveal>
          <h3 className="text-2xl font-semibold tracking-tight">{about.greeting}</h3>
          {about.paragraphs.map((p, i) => (
            <p key={i} className="mt-5 leading-relaxed text-muted">
              {p}
            </p>
          ))}
        </Reveal>

        <Reveal delay={120}>
          <div className="border-t border-hairline pt-6 md:border-l md:border-t-0 md:pl-10 md:pt-0">
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
              {about.bringTitle}
            </p>
            <ul className="mt-6 space-y-4">
              {about.brings.map((b, i) => (
                <li key={b} className="flex gap-4">
                  <span className="mt-1 font-mono text-[11px] text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-sm leading-relaxed text-text">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* ------------------------------ Resume ------------------------------- */
export function Resume() {
  const chips = ["Professional Experience", "Skills & Tools", "Technical Projects", `Updated ${profile.resumeUpdated}`];
  return (
    <Section id="resume" label="Resume" title="My Resume" intro="Complete professional overview.">
      <Reveal>
        <div className="rounded-lg border border-hairline bg-surface p-8 md:p-10">
          <div className="grid gap-10 md:grid-cols-[1.5fr_1fr] md:items-center">
            <div>
              <p className="leading-relaxed text-muted">
                Download my resume to learn more about my professional background, technical
                skills, work experience, and achievements. It includes detailed information about
                my projects, open-source contributions, and career highlights.
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {chips.map((c) => (
                  <Chip key={c}>{c}</Chip>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-start gap-3 md:items-end">
              <a
                href={profile.resumeFile}
                download
                className="inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 font-mono text-sm text-[#0d0d0d] transition-opacity hover:opacity-90"
              >
                <svg viewBox="0 0 16 16" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M8 2v8m0 0 3-3M8 10 5 7M3 13h10" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Download PDF
              </a>
              <span className="font-mono text-[11px] text-faint">
                PDF Format · Updated Recently
              </span>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

/* ----------------------------- Education ----------------------------- */
export function Education() {
  return (
    <Section id="education" label="Education" title="Education">
      <div className="space-y-0">
        {education.map((e, i) => (
          <Reveal key={e.degree} delay={i * 90}>
            <div className="grid gap-2 border-t border-hairline py-8 md:grid-cols-[1fr_auto] md:gap-8">
              <div>
                <h3 className="text-lg font-semibold tracking-tight md:text-xl">{e.degree}</h3>
                <p className="mt-1.5 text-sm text-muted">
                  {e.school} · {e.place}
                </p>
                <p className="mt-3 font-mono text-[12px] text-accent">{e.score}</p>
              </div>
              <span className="font-mono text-[12px] text-faint md:text-right">
                {e.period}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ------------------------------- Skills ------------------------------ */
const ICONS: Record<string, React.ReactNode> = {
  brain: (
    <>
      <path d="M12 5a3 3 0 0 0-3 3 2.5 2.5 0 0 0-1 4.8A2.5 2.5 0 0 0 10 18h2zM12 5a3 3 0 0 1 3 3 2.5 2.5 0 0 1 1 4.8A2.5 2.5 0 0 1 14 18h-2z" />
      <path d="M12 5v13" />
    </>
  ),
  server: (
    <>
      <rect x="3" y="4" width="18" height="6" rx="1.5" />
      <rect x="3" y="14" width="18" height="6" rx="1.5" />
      <path d="M7 7h.01M7 17h.01" />
    </>
  ),
  layout: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M9 9v11" />
    </>
  ),
  code: <path d="m8 6-5 6 5 6M16 6l5 6-5 6" />,
  database: (
    <>
      <ellipse cx="12" cy="6" rx="8" ry="3" />
      <path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" />
    </>
  ),
  tools: (
    <>
      <path d="M14.7 6.3a4 4 0 0 1 5 5L10 21l-4-4z" />
      <path d="m3.5 8.5 4-4M5.5 6.5 9 10" />
    </>
  ),
};

function SkillIcon({ name }: { name: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {ICONS[name] ?? ICONS.code}
    </svg>
  );
}

export function Skills() {
  return (
    <Section
      id="skills"
      label="Skills"
      title="Skills & Technologies"
      intro="The technologies and tools I use to bring ideas to life."
    >
      <div className="grid gap-6 md:grid-cols-2">
        {skills.map((s, i) => (
          <Reveal key={s.group} delay={(i % 2) * 90}>
            <div className="h-full rounded-lg border border-hairline bg-surface p-8 transition-colors hover:border-accent-dim">
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-lg border border-hairline bg-surface-2 text-accent">
                  <SkillIcon name={s.icon} />
                </span>
                <h3 className="text-lg font-semibold tracking-tight">{s.group}</h3>
              </div>

              <div className="mt-7 flex flex-wrap gap-2.5 border-t border-hairline pt-7">
                {s.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-hairline bg-surface-2 px-3.5 py-2 text-sm text-text transition-colors hover:border-accent hover:text-accent"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ----------------------------- Experience ---------------------------- */
export function Experience() {
  return (
    <Section
      id="experience"
      label="Experience"
      title="Work Experience"
      intro="My professional journey and the experiences that have shaped how I build."
    >
      <div>
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 90}>
            <div className="border-t border-hairline py-10">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <div className="flex items-baseline gap-4">
                  <span className="font-mono text-[12px] text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight md:text-2xl">{job.role}</h3>
                    <p className="mt-1 text-sm text-muted">
                      {job.company} · {job.place}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2.5">
                  {job.current && <Dot />}
                  <span className="font-mono text-[12px] text-faint">{job.period}</span>
                </div>
              </div>

              <ul className="mt-7 space-y-3.5 md:pl-10">
                {job.achievements.map((a) => (
                  <li key={a} className="flex gap-3.5">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    <span className="text-sm leading-relaxed text-muted">{a}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap gap-2 md:pl-10">
                {job.tech.map((t) => (
                  <Chip key={t}>{t}</Chip>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ---------------------------- Open Source ---------------------------- */
export function OpenSource() {
  return (
    <Section
      id="open-source"
      label="Open Source"
      title="Contributions"
      intro="Merged fixes in the evaluation and observability tooling that AI teams actually run."
    >
      <div>
        {openSource.map((c, i) => (
          <Reveal key={c.project} delay={i * 90}>
            <a
              href={c.pr}
              target="_blank"
              rel="noreferrer"
              className="group grid gap-4 border-t border-hairline py-9 transition-colors hover:bg-surface md:grid-cols-[1fr_auto] md:gap-10"
            >
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-lg font-semibold tracking-tight transition-colors group-hover:text-accent md:text-xl">
                    {c.project}
                  </h3>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-accent-dim px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent">
                    {c.status}
                  </span>
                </div>
                <p className="mt-2.5 text-sm text-faint">{c.blurb}</p>
                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted">
                  {c.contribution}
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-2">
                  <Chip>{c.lang}</Chip>
                  <span className="inline-flex items-center gap-1 font-mono text-[11px] text-faint transition-colors group-hover:text-accent">
                    {c.prLabel} <ArrowUpRight />
                  </span>
                </div>
              </div>
              <span className="font-mono text-[12px] text-faint md:text-right">{c.year}</span>
            </a>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ------------------------------ Contact ------------------------------ */
export function Contact() {
  const rows = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { label: "Phone", value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, "")}` },
    { label: "Location", value: profile.location },
    { label: "LinkedIn", value: "hiya-arora", href: profile.linkedin },
    { label: "GitHub", value: "Hiyaarora", href: profile.github },
  ];

  return (
    <Section
      id="contact"
      label="Contact"
      title="Get In Touch"
      intro="I'm always open to discussing new opportunities, interesting problems, or just having a conversation."
    >
      <div className="grid gap-14 md:grid-cols-2">
        <Reveal>
          <div className="space-y-0">
            {rows.map((r) => (
              <div
                key={r.label}
                className="flex items-baseline justify-between gap-6 border-t border-hairline py-5"
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-faint">
                  {r.label}
                </span>
                {r.href ? (
                  <a
                    href={r.href}
                    target={r.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="text-sm text-text transition-colors hover:text-accent"
                  >
                    {r.value}
                  </a>
                ) : (
                  <span className="text-sm text-text">{r.value}</span>
                )}
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-lg border border-hairline bg-surface p-8">
            <div className="flex items-center gap-2.5">
              <Dot />
              <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                Available
              </span>
            </div>
            <h3 className="mt-5 text-xl font-semibold tracking-tight">{profile.availability}</h3>
            <p className="mt-4 leading-relaxed text-muted">
              Whether you have a role in mind, a problem worth solving, or just want to talk about
              building AI systems, I'd like to hear from you.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-7 inline-flex items-center gap-2 rounded-md bg-accent px-6 py-3 font-mono text-sm text-[#0d0d0d] transition-opacity hover:opacity-90"
            >
              Say hello <ArrowUpRight />
            </a>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* ------------------------------- Footer ------------------------------ */
export function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-wrap items-start justify-between gap-8">
          <div>
            <p className="font-mono text-sm">
              <span>hiya</span>
              <span className="text-accent">.</span>
              <span>arora</span>
            </p>
            <p className="mt-2 font-mono text-[12px] text-faint">
              Software Developer, {profile.location}
            </p>
          </div>
          <div className="flex gap-6 font-mono text-[12px] text-muted">
            <a href={profile.github} target="_blank" rel="noreferrer" className="hover:text-accent">GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover:text-accent">LinkedIn</a>
            <a href={`mailto:${profile.email}`} className="hover:text-accent">Email</a>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-hairline pt-6">
          <span className="font-mono text-[11px] text-faint">
            © {new Date().getFullYear()} {profile.name}
          </span>
          <span className="font-mono text-[11px] text-faint">
            Designed and built from scratch.
          </span>
        </div>
      </div>
    </footer>
  );
}
