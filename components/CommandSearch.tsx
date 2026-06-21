"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { tools, getCategoryMeta } from "@/lib/tools-config";

export default function CommandSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen(true);
        setQuery("");
      }
      if (e.key === "Escape") {
        setOpen(false);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => inputRef.current?.focus(), 10);
      return () => clearTimeout(timer);
    }
  }, [open]);

  function openSearch() {
    setQuery("");
    setOpen(true);
  }

  const results = query.trim()
    ? tools
        .filter((t) => {
          const q = query.toLowerCase();
          return (
            t.name.toLowerCase().includes(q) ||
            t.shortDescription.toLowerCase().includes(q) ||
            t.keywords.some((k) => k.toLowerCase().includes(q))
          );
        })
        .slice(0, 8)
    : [];

  function goTo(slug: string) {
    setOpen(false);
    router.push(`/${slug}`);
  }

  return (
    <>
      <button
        onClick={openSearch}
        className="flex items-center gap-2 w-full max-w-sm rounded-lg border border-border bg-surface px-3.5 py-2 text-sm text-muted hover:border-accent/50 transition-colors"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="shrink-0">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <span className="flex-1 text-left">Search tools</span>
        <kbd className="hidden sm:inline-flex items-center gap-0.5 rounded border border-border px-1.5 py-0.5 text-[11px] font-mono text-muted">
          ⌘K
        </kbd>
      </button>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-start justify-center pt-[12vh] px-4 bg-black/60 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <div
            className="w-full max-w-xl rounded-xl border border-border bg-surface shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3 border-b border-border px-4 py-3.5">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-muted shrink-0">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search 100+ tools..."
                className="flex-1 bg-transparent outline-none text-sm placeholder:text-muted"
              />
              <kbd className="rounded border border-border px-1.5 py-0.5 text-[11px] font-mono text-muted">
                ESC
              </kbd>
            </div>

            <div className="max-h-80 overflow-y-auto py-2">
              {query.trim() === "" && (
                <p className="px-4 py-6 text-center text-sm text-muted">
                  Start typing to find a tool
                </p>
              )}
              {query.trim() !== "" && results.length === 0 && (
                <p className="px-4 py-6 text-center text-sm text-muted">
                  No tools found for &ldquo;{query}&rdquo;
                </p>
              )}
              {results.map((tool) => {
                const cat = getCategoryMeta(tool.category);
                return (
                  <button
                    key={tool.slug}
                    onClick={() => goTo(tool.slug)}
                    className="flex w-full items-center justify-between px-4 py-2.5 text-left hover:bg-surface-hover transition-colors"
                  >
                    <div>
                      <p className="text-sm text-foreground">{tool.name}</p>
                      <p className="text-xs text-muted">{tool.shortDescription}</p>
                    </div>
                    <span className="text-[11px] text-accent shrink-0 ml-3">
                      {cat?.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
