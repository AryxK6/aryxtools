"use client";

import { useState } from "react";

const conversions: { label: string; fn: (s: string) => string }[] = [
  { label: "UPPERCASE", fn: (s) => s.toUpperCase() },
  { label: "lowercase", fn: (s) => s.toLowerCase() },
  {
    label: "Title Case",
    fn: (s) =>
      s.toLowerCase().replace(/\b\w/g, (c) => c.toUpperCase()),
  },
  {
    label: "Sentence case",
    fn: (s) => {
      const lower = s.toLowerCase();
      return lower.replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase());
    },
  },
  {
    label: "camelCase",
    fn: (s) =>
      s
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]+(.)/g, (_, c) => c.toUpperCase()),
  },
  {
    label: "snake_case",
    fn: (s) =>
      s
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]+/g, "_"),
  },
];

export default function CaseConverter() {
  const [text, setText] = useState("");
  const [copiedLabel, setCopiedLabel] = useState<string | null>(null);

  function copy(value: string, label: string) {
    navigator.clipboard.writeText(value);
    setCopiedLabel(label);
    setTimeout(() => setCopiedLabel(null), 1500);
  }

  return (
    <div className="flex flex-col gap-5">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type or paste text here..."
        rows={5}
        className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted outline-none focus:border-accent/60 resize-y"
      />

      <div className="flex flex-col gap-2">
        {conversions.map(({ label, fn }) => {
          const result = text ? fn(text) : "";
          return (
            <div
              key={label}
              className="flex items-center gap-3 rounded-lg border border-border bg-background px-4 py-3"
            >
              <span className="text-xs text-muted w-28 shrink-0">{label}</span>
              <p className="flex-1 text-sm text-foreground truncate">
                {result || <span className="text-muted">—</span>}
              </p>
              <button
                onClick={() => copy(result, label)}
                disabled={!result}
                className="text-xs text-accent hover:text-accent-hover disabled:opacity-30 disabled:cursor-not-allowed shrink-0"
              >
                {copiedLabel === label ? "Copied" : "Copy"}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
