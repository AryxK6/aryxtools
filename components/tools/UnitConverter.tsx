"use client";

import { useMemo, useState } from "react";

type Category = "length" | "weight" | "temperature";

const lengthUnits = {
  meters: 1,
  kilometers: 1000,
  centimeters: 0.01,
  millimeters: 0.001,
  miles: 1609.344,
  yards: 0.9144,
  feet: 0.3048,
  inches: 0.0254,
};

const weightUnits = {
  kilograms: 1,
  grams: 0.001,
  milligrams: 0.000001,
  pounds: 0.45359237,
  ounces: 0.028349523125,
  tonnes: 1000,
};

function convertTemperature(value: number, from: string, to: string): number {
  let celsius: number;
  if (from === "celsius") celsius = value;
  else if (from === "fahrenheit") celsius = ((value - 32) * 5) / 9;
  else celsius = value - 273.15;

  if (to === "celsius") return celsius;
  if (to === "fahrenheit") return (celsius * 9) / 5 + 32;
  return celsius + 273.15;
}

const unitsByCategory: Record<Category, Record<string, number> | null> = {
  length: lengthUnits,
  weight: weightUnits,
  temperature: null,
};

const temperatureUnits = ["celsius", "fahrenheit", "kelvin"];

export default function UnitConverter() {
  const [category, setCategory] = useState<Category>("length");
  const [fromUnit, setFromUnit] = useState("meters");
  const [toUnit, setToUnit] = useState("feet");
  const [value, setValue] = useState("1");

  const unitOptions = useMemo(() => {
    if (category === "temperature") return temperatureUnits;
    return Object.keys(unitsByCategory[category]!);
  }, [category]);

  function changeCategory(cat: Category) {
    setCategory(cat);
    const options = cat === "temperature" ? temperatureUnits : Object.keys(unitsByCategory[cat]!);
    setFromUnit(options[0]);
    setToUnit(options[1]);
  }

  const result = useMemo(() => {
    const num = parseFloat(value);
    if (isNaN(num)) return null;

    if (category === "temperature") {
      return convertTemperature(num, fromUnit, toUnit);
    }

    const units = unitsByCategory[category]!;
    const inBase = num * units[fromUnit];
    return inBase / units[toUnit];
  }, [value, fromUnit, toUnit, category]);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex gap-2">
        {(["length", "weight", "temperature"] as Category[]).map((cat) => (
          <button
            key={cat}
            onClick={() => changeCategory(cat)}
            className={`rounded-lg px-4 py-2 text-sm font-medium capitalize transition-colors ${
              category === cat
                ? "bg-accent text-white"
                : "border border-border text-foreground/80 hover:bg-surface-hover"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] gap-4 items-end">
        <div>
          <label className="block text-sm text-muted mb-2">From</label>
          <div className="flex flex-col gap-2">
            <input
              type="number"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-accent/60"
            />
            <select
              value={fromUnit}
              onChange={(e) => setFromUnit(e.target.value)}
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-accent/60 capitalize"
            >
              {unitOptions.map((u) => (
                <option key={u} value={u}>
                  {u}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="hidden sm:flex items-center justify-center pb-3 text-muted">
          →
        </div>

        <div>
          <label className="block text-sm text-muted mb-2">To</label>
          <div className="flex flex-col gap-2">
            <div className="w-full rounded-lg border border-accent/30 bg-accent-muted px-4 py-2.5 text-sm font-display font-semibold text-foreground tabular-nums">
              {result !== null ? Number(result.toFixed(6)).toString() : "—"}
            </div>
            <select
              value={toUnit}
              onChange={(e) => setToUnit(e.target.value)}
              className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-accent/60 capitalize"
            >
              {unitOptions.map((u) => (
                <option key={u} value={u}>
                  {u}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
