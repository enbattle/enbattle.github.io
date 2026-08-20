"use client";

export default function Footer({
  onNavigate,
}: {
  onNavigate: (id: string) => void;
}) {
  return (
    <footer className="border-t border-border px-6 py-8 md:px-16">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 font-mono text-xs uppercase tracking-wide text-muted-foreground">
        <span>&copy; {new Date().getFullYear()} Steven Li</span>
        <button
          onClick={() => onNavigate("home")}
          className="transition-colors hover:text-foreground"
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  );
}
