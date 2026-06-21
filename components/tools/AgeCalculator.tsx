"use client";

import { useState } from "react";

function calculateAge(dob: Date, target: Date) {
  let years = target.getFullYear() - dob.getFullYear();
  let months = target.getMonth() - dob.getMonth();
  let days = target.getDate() - dob.getDate();

  if (days < 0) {
    months -= 1;
    const lastMonth = new Date(target.getFullYear(), target.getMonth(), 0);
    days += lastMonth.getDate();
  }
  if (months < 0) {
    years -= 1;
    months += 12;
  }

  const totalDays = Math.floor((target.getTime() - dob.getTime()) / (1000 * 60 * 60 * 24));
  const totalWeeks = Math.floor(totalDays / 7);
  const totalMonths = years * 12 + months;

  return { years, months, days, totalDays, totalWeeks, totalMonths };
}

export default function AgeCalculator() {
  const [dob, setDob] = useState("");
  const [result, setResult] = useState<ReturnType<typeof calculateAge> | null>(null);
  const [error, setError] = useState("");

  function handleCalculate() {
    if (!dob) {
      setError("Please select your date of birth.");
      setResult(null);
      return;
    }
    const dobDate = new Date(dob);
    const today = new Date();

    if (dobDate > today) {
      setError("Date of birth cannot be in the future.");
      setResult(null);
      return;
    }

    setError("");
    setResult(calculateAge(dobDate, today));
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col sm:flex-row gap-3 items-end">
        <div className="flex-1 w-full">
          <label className="block text-sm text-muted mb-2">Date of birth</label>
          <input
            type="date"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            max={new Date().toISOString().split("T")[0]}
            className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-accent/60"
          />
        </div>
        <button
          onClick={handleCalculate}
          className="w-full sm:w-auto rounded-lg bg-accent hover:bg-accent-hover text-white text-sm font-medium px-5 py-2.5 transition-colors"
        >
          Calculate age
        </button>
      </div>

      {error && (
        <p className="text-sm text-danger bg-danger/10 border border-danger/30 rounded-lg px-4 py-3">
          {error}
        </p>
      )}

      {result && (
        <div className="flex flex-col gap-4">
          <div className="rounded-lg border border-accent/30 bg-accent-muted px-5 py-4">
            <p className="text-sm text-muted mb-1">You are</p>
            <p className="font-display font-semibold text-2xl text-foreground">
              {result.years} years, {result.months} months, {result.days} days old
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            <Stat label="Total months" value={result.totalMonths.toLocaleString()} />
            <Stat label="Total weeks" value={result.totalWeeks.toLocaleString()} />
            <Stat label="Total days" value={result.totalDays.toLocaleString()} />
          </div>
        </div>
      )}
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border bg-background px-4 py-3">
      <p className="text-xs text-muted mb-1">{label}</p>
      <p className="font-display font-semibold text-lg text-accent tabular-nums">
        {value}
      </p>
    </div>
  );
}
