"use client";

import { useState, useCallback } from "react";

const LOWER = "abcdefghijklmnopqrstuvwxyz";
const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const NUMBERS = "0123456789";
const SYMBOLS = "!@#$%^&*()_+-=[]{}|;:,.<>?";

export default function PasswordGenerator() {
  const [length, setLength] = useState(16);
  const [useUpper, setUseUpper] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useSymbols, setUseSymbols] = useState(true);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const generate = useCallback(() => {
    let charset = LOWER;
    if (useUpper) charset += UPPER;
    if (useNumbers) charset += NUMBERS;
    if (useSymbols) charset += SYMBOLS;

    const array = new Uint32Array(length);
    crypto.getRandomValues(array);
    let result = "";
    for (let i = 0; i < length; i++) {
      result += charset[array[i] % charset.length];
    }
    setPassword(result);
  }, [length, useUpper, useNumbers, useSymbols]);

  function copy() {
    if (!password) return;
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  const strength =
    length >= 16 && useUpper && useNumbers && useSymbols
      ? "Strong"
      : length >= 10
      ? "Medium"
      : "Weak";

  const strengthColor =
    strength === "Strong" ? "text-success" : strength === "Medium" ? "text-warning" : "text-danger";

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center gap-3 rounded-lg border border-border bg-background px-4 py-3">
        <p className="flex-1 font-mono text-sm sm:text-base text-foreground truncate">
          {password || "Click generate to create a password"}
        </p>
        <button
          onClick={copy}
          disabled={!password}
          className="text-xs text-accent hover:text-accent-hover disabled:opacity-30 shrink-0"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm text-foreground">Length</label>
            <span className="text-sm text-muted tabular-nums">{length}</span>
          </div>
          <input
            type="range"
            min={6}
            max={32}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full accent-accent"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <Toggle label="Uppercase (A-Z)" checked={useUpper} onChange={setUseUpper} />
          <Toggle label="Numbers (0-9)" checked={useNumbers} onChange={setUseNumbers} />
          <Toggle label="Symbols (!@#)" checked={useSymbols} onChange={setUseSymbols} />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <p className="text-sm">
          Strength: <span className={strengthColor}>{strength}</span>
        </p>
        <button
          onClick={generate}
          className="rounded-lg bg-accent hover:bg-accent-hover text-white text-sm font-medium px-5 py-2.5 transition-colors"
        >
          Generate password
        </button>
      </div>
    </div>
  );
}

function Toggle({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <label className="flex items-center gap-2.5 rounded-lg border border-border bg-background px-3.5 py-2.5 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="accent-accent"
      />
      <span className="text-sm text-foreground">{label}</span>
    </label>
  );
}
