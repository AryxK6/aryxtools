"use client";

import { useState } from "react";

const WORDS = [
  "lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit",
  "sed", "do", "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore",
  "magna", "aliqua", "enim", "ad", "minim", "veniam", "quis", "nostrud",
  "exercitation", "ullamco", "laboris", "nisi", "aliquip", "ex", "ea", "commodo",
  "consequat", "duis", "aute", "irure", "in", "reprehenderit", "voluptate",
  "velit", "esse", "cillum", "fugiat", "nulla", "pariatur", "excepteur", "sint",
  "occaecat", "cupidatat", "non", "proident", "sunt", "culpa", "qui", "officia",
  "deserunt", "mollit", "anim", "id", "est", "laborum",
];

function randomWord() {
  return WORDS[Math.floor(Math.random() * WORDS.length)];
}

function generateSentence(wordCount: number) {
  const words = Array.from({ length: wordCount }, () => randomWord());
  words[0] = words[0][0].toUpperCase() + words[0].slice(1);
  return words.join(" ") + ".";
}

function generateParagraph() {
  const sentenceCount = 4 + Math.floor(Math.random() * 4);
  const sentences = Array.from({ length: sentenceCount }, () =>
    generateSentence(6 + Math.floor(Math.random() * 10))
  );
  return sentences.join(" ");
}

type Mode = "paragraphs" | "sentences" | "words";

export default function LoremIpsumGenerator() {
  const [mode, setMode] = useState<Mode>("paragraphs");
  const [count, setCount] = useState(3);
  const [startWithLorem, setStartWithLorem] = useState(true);
  const [output, setOutput] = useState("");
  const [copied, setCopied] = useState(false);

  function generate() {
    let result = "";

    if (mode === "paragraphs") {
      const paragraphs = Array.from({ length: count }, () => generateParagraph());
      result = paragraphs.join("\n\n");
    } else if (mode === "sentences") {
      const sentences = Array.from({ length: count }, () =>
        generateSentence(6 + Math.floor(Math.random() * 10))
      );
      result = sentences.join(" ");
    } else {
      const words = Array.from({ length: count }, () => randomWord());
      result = words.join(" ");
      result = result[0].toUpperCase() + result.slice(1);
    }

    if (startWithLorem) {
      result = "Lorem ipsum dolor sit amet, " + result.charAt(0).toLowerCase() + result.slice(1);
    }

    setOutput(result);
  }

  function copy() {
    if (!output) return;
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-wrap items-end gap-3">
        <div>
          <label className="block text-sm text-muted mb-2">Generate</label>
          <select
            value={mode}
            onChange={(e) => setMode(e.target.value as Mode)}
            className="rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-accent/60"
          >
            <option value="paragraphs">Paragraphs</option>
            <option value="sentences">Sentences</option>
            <option value="words">Words</option>
          </select>
        </div>

        <div>
          <label className="block text-sm text-muted mb-2">Count</label>
          <input
            type="number"
            min={1}
            max={50}
            value={count}
            onChange={(e) => setCount(Math.max(1, Math.min(50, Number(e.target.value))))}
            className="w-24 rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-accent/60"
          />
        </div>

        <label className="flex items-center gap-2 pb-2.5">
          <input
            type="checkbox"
            checked={startWithLorem}
            onChange={(e) => setStartWithLorem(e.target.checked)}
            className="accent-accent"
          />
          <span className="text-sm text-foreground">Start with &ldquo;Lorem ipsum&rdquo;</span>
        </label>

        <button
          onClick={generate}
          className="rounded-lg bg-accent hover:bg-accent-hover text-white text-sm font-medium px-5 py-2.5 transition-colors ml-auto"
        >
          Generate
        </button>
      </div>

      {output && (
        <div className="relative">
          <div className="w-full rounded-lg border border-border bg-background px-4 py-4 text-sm text-foreground leading-relaxed whitespace-pre-line max-h-96 overflow-y-auto">
            {output}
          </div>
          <button
            onClick={copy}
            className="absolute top-3 right-3 text-xs text-accent hover:text-accent-hover bg-surface px-2 py-1 rounded"
          >
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
      )}
    </div>
  );
}
