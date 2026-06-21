"use client";

import { useState } from "react";

export default function JsonFormatter() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  function format(indent: number) {
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed, null, indent));
      setError("");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Invalid JSON");
      setOutput("");
    }
  }

  function minify() {
    try {
      const parsed = JSON.parse(input);
      setOutput(JSON.stringify(parsed));
      setError("");
    } catch (e) {
      setError(e instanceof Error ? e.message : "Invalid JSON");
      setOutput("");
    }
  }

  function copy() {
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <div className="flex flex-col gap-4">
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder='Paste JSON here, e.g. {"name":"aryx","tools":100}'
        rows={8}
        className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm font-mono text-foreground placeholder:text-muted outline-none focus:border-accent/60 resize-y"
      />

      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => format(2)}
          className="rounded-lg bg-accent hover:bg-accent-hover text-white text-sm font-medium px-4 py-2 transition-colors"
        >
          Format (2 spaces)
        </button>
        <button
          onClick={() => format(4)}
          className="rounded-lg border border-border hover:bg-surface-hover text-sm font-medium px-4 py-2 transition-colors"
        >
          Format (4 spaces)
        </button>
        <button
          onClick={minify}
          className="rounded-lg border border-border hover:bg-surface-hover text-sm font-medium px-4 py-2 transition-colors"
        >
          Minify
        </button>
      </div>

      {error && (
        <p className="text-sm text-danger bg-danger/10 border border-danger/30 rounded-lg px-4 py-3">
          {error}
        </p>
      )}

      {output && (
        <div className="relative">
          <pre className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm font-mono text-foreground overflow-x-auto max-h-96 overflow-y-auto">
            {output}
          </pre>
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
