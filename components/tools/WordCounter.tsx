"use client";

import { useMemo, useState } from "react";

export default function WordCounter() {
  const [text, setText] = useState("");

  const stats = useMemo(() => {
    const trimmed = text.trim();
    const words = trimmed === "" ? 0 : trimmed.split(/\s+/).length;
    const characters = text.length;
    const charactersNoSpaces = text.replace(/\s/g, "").length;
    const sentences =
      trimmed === "" ? 0 : (trimmed.match(/[.!?]+(?=\s|$)/g) || []).length;
    const paragraphs =
      trimmed === "" ? 0 : trimmed.split(/\n+/).filter((p) => p.trim() !== "").length;
    const readingTime = Math.max(1, Math.ceil(words / 200));

    return { words, characters, charactersNoSpaces, sentences, paragraphs, readingTime };
  }, [text]);

  return (
    <div className="flex flex-col gap-5">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Paste or type your text here..."
        rows={10}
        className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted outline-none focus:border-accent/60 resize-y font-mono"
      />

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        <Stat label="Words" value={stats.words} />
        <Stat label="Characters" value={stats.characters} />
        <Stat label="Characters (no spaces)" value={stats.charactersNoSpaces} />
        <Stat label="Sentences" value={stats.sentences} />
        <Stat label="Paragraphs" value={stats.paragraphs} />
        <Stat label="Reading time" value={`${stats.readingTime} min`} />
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="rounded-lg border border-border bg-background px-4 py-3">
      <p className="text-xs text-muted mb-1">{label}</p>
      <p className="font-display font-semibold text-xl text-accent tabular-nums">
        {value}
      </p>
    </div>
  );
}
