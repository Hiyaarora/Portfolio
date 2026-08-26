import { useEffect, useRef, useState, type ReactNode } from "react";

/* ---------- scroll reveal ---------- */
export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal ${shown ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

/* ---------- Sunny-style eyebrow: hairline rule + mono caps ---------- */
export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-4">
      <span className="h-px w-10 bg-faint" />
      <span className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
        {children}
      </span>
    </div>
  );
}

/* ---------- section wrapper ---------- */
export function Section({
  id,
  label,
  title,
  intro,
  children,
}: {
  id: string;
  label: string;
  title: string;
  intro?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-hairline">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
        <Reveal>
          <Eyebrow>{label}</Eyebrow>
          <h2 className="mt-6 text-3xl font-semibold tracking-tight md:text-5xl">{title}</h2>
          {intro && (
            <p className="mt-4 max-w-2xl text-muted md:text-lg">{intro}</p>
          )}
        </Reveal>
        <div className="mt-14">{children}</div>
      </div>
    </section>
  );
}

/* ---------- mono chip ---------- */
export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="rounded border border-hairline bg-surface px-2.5 py-1 font-mono text-[11px] text-muted">
      {children}
    </span>
  );
}

/* ---------- status dot ---------- */
export function Dot({ accent = true }: { accent?: boolean }) {
  return (
    <span className="relative inline-flex h-2 w-2 shrink-0">
      <span
        className="dot-ping absolute inline-flex h-full w-full rounded-full"
        style={{ background: accent ? "var(--color-accent)" : "var(--color-muted)" }}
      />
      <span
        className="relative inline-flex h-2 w-2 rounded-full"
        style={{ background: accent ? "var(--color-accent)" : "var(--color-muted)" }}
      />
    </span>
  );
}

/* ---------- arrow ---------- */
export function ArrowUpRight({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 16 16" fill="none" className={`h-3.5 w-3.5 ${className}`} aria-hidden="true">
      <path d="M4.5 11.5 11.5 4.5M11.5 4.5H5.5M11.5 4.5v6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
