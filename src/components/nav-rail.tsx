"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Github, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeSwitcher } from "@/components/theme-switcher";

export type NavItem = { id: string; label: string };

const socialLinks = [
  { icon: Github, url: "https://github.com/enbattle", label: "GitHub" },
  { icon: Linkedin, url: "https://linkedin.com/in/stevenli44", label: "LinkedIn" },
];

export function NavRail({
  navItems,
  activeSection,
  onNavigate,
}: {
  navItems: NavItem[];
  activeSection: string;
  onNavigate: (id: string) => void;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Desktop rail */}
      <nav className="fixed left-0 top-0 z-40 hidden h-screen w-56 flex-col justify-between border-r border-border px-8 py-10 md:flex">
        <div>
          <button
            onClick={() => onNavigate("home")}
            className="font-display text-2xl italic text-rust"
          >
            SL
          </button>

          <ul className="mt-16 space-y-5">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => onNavigate(item.id)}
                    className={cn(
                      "group flex items-baseline gap-3 font-mono text-xs uppercase tracking-[0.15em] transition-colors",
                      isActive
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    <span
                      className={cn(
                        "transition-colors",
                        isActive ? "text-rust" : "text-muted-foreground/50"
                      )}
                    >
                      {item.id === "home" ? "00" : item.id.slice(0, 2)}
                    </span>
                    {item.label}
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="space-y-6">
          <div className="flex items-center gap-4 text-muted-foreground">
            {socialLinks.map(({ icon: Icon, url, label }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="transition-colors hover:text-foreground"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
          <ThemeSwitcher />
        </div>
      </nav>

      {/* Mobile bar */}
      <header className="fixed top-0 z-50 flex w-full items-center justify-between border-b border-border bg-background/90 px-6 py-4 backdrop-blur-sm md:hidden">
        <button
          onClick={() => onNavigate("home")}
          className="font-display text-xl italic text-rust"
        >
          SL
        </button>
        <div className="flex items-center gap-2">
          <ThemeSwitcher />
          <button
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
            className="p-1 text-foreground"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-background px-8 md:hidden"
          >
            <ul className="space-y-6">
              {navItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      onNavigate(item.id);
                      setMobileOpen(false);
                    }}
                    className="font-display text-4xl"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>

            <div className="mt-12 flex items-center gap-6 text-muted-foreground">
              {socialLinks.map(({ icon: Icon, url, label }) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="transition-colors hover:text-foreground"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
