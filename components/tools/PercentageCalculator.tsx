"use client";

import { useState } from "react";

export default function PercentageCalculator() {
  // X% of Y
  const [pctOf, setPctOf] = useState({ pct: "", value: "" });
  // X is what % of Y
  const [isWhatPct, setIsWhatPct] = useState({ x: "", y: "" });
  // % increase/decrease from X to Y
  const [change, setChange] = useState({ from: "", to: "" });

  const pctOfResult =
    pctOf.pct !== "" && pctOf.value !== ""
      ? (Number(pctOf.pct) / 100) * Number(pctOf.value)
      : null;

  const isWhatPctResult =
    isWhatPct.x !== "" && isWhatPct.y !== "" && Number(isWhatPct.y) !== 0
      ? (Number(isWhatPct.x) / Number(isWhatPct.y)) * 100
      : null;

  const changeResult =
    change.from !== "" && change.to !== "" && Number(change.from) !== 0
      ? ((Number(change.to) - Number(change.from)) / Number(change.from)) * 100
      : null;

  return (
    <div className="flex flex-col gap-6">
      <Block title="What is X% of Y?">
        <div className="flex items-center gap-2 flex-wrap text-sm">
          <Input value={pctOf.pct} onChange={(v) => setPctOf((s) => ({ ...s, pct: v }))} placeholder="20" suffix="%" />
          <span className="text-muted">of</span>
          <Input value={pctOf.value} onChange={(v) => setPctOf((s) => ({ ...s, value: v }))} placeholder="150" />
          <span className="text-muted">=</span>
          <Result>{pctOfResult !== null ? pctOfResult.toFixed(2) : "—"}</Result>
        </div>
      </Block>

      <Block title="X is what percent of Y?">
        <div className="flex items-center gap-2 flex-wrap text-sm">
          <Input value={isWhatPct.x} onChange={(v) => setIsWhatPct((s) => ({ ...s, x: v }))} placeholder="30" />
          <span className="text-muted">is what % of</span>
          <Input value={isWhatPct.y} onChange={(v) => setIsWhatPct((s) => ({ ...s, y: v }))} placeholder="150" />
          <span className="text-muted">=</span>
          <Result>{isWhatPctResult !== null ? `${isWhatPctResult.toFixed(2)}%` : "—"}</Result>
        </div>
      </Block>

      <Block title="Percentage increase / decrease">
        <div className="flex items-center gap-2 flex-wrap text-sm">
          <span className="text-muted">From</span>
          <Input value={change.from} onChange={(v) => setChange((s) => ({ ...s, from: v }))} placeholder="100" />
          <span className="text-muted">to</span>
          <Input value={change.to} onChange={(v) => setChange((s) => ({ ...s, to: v }))} placeholder="125" />
          <span className="text-muted">=</span>
          <Result positive={changeResult !== null && changeResult >= 0}>
            {changeResult !== null
              ? `${changeResult >= 0 ? "+" : ""}${changeResult.toFixed(2)}%`
              : "—"}
          </Result>
        </div>
      </Block>
    </div>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-border bg-background px-4 py-4">
      <p className="text-xs text-muted mb-3">{title}</p>
      {children}
    </div>
  );
}

function Input({
  value,
  onChange,
  placeholder,
  suffix,
}: {
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  suffix?: string;
}) {
  return (
    <div className="flex items-center">
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-20 rounded-lg border border-border bg-surface px-3 py-1.5 text-sm outline-none focus:border-accent/60"
      />
      {suffix && <span className="ml-1 text-muted">{suffix}</span>}
    </div>
  );
}

function Result({ children, positive }: { children: React.ReactNode; positive?: boolean }) {
  const color =
    positive === undefined ? "text-accent" : positive ? "text-success" : "text-danger";
  return <span className={`font-display font-semibold ${color}`}>{children}</span>;
}
