"use client";

import { useState } from "react";

function hexToRgb(hex: string) {
  const clean = hex.replace("#", "");
  const num = parseInt(clean, 16);
  return {
    r: (num >> 16) & 255,
    g: (num >> 8) & 255,
    b: num & 255,
  };
}

function rgbToHsl(r: number, g: number, b: number) {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
}

export default function ColorPicker() {
  const [color, setColor] = useState("#7c5cfc");
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const rgb = hexToRgb(color);
  const hsl = rgbToHsl(rgb.r, rgb.g, rgb.b);

  const values = [
    { label: "HEX", value: color.toUpperCase() },
    { label: "RGB", value: `rgb(${rgb.r}, ${rgb.g}, ${rgb.b})` },
    { label: "HSL", value: `hsl(${hsl.h}, ${hsl.s}%, ${hsl.l}%)` },
  ];

  function copy(value: string, label: string) {
    navigator.clipboard.writeText(value);
    setCopiedField(label);
    setTimeout(() => setCopiedField(null), 1500);
  }

  return (
    <div className="flex flex-col sm:flex-row gap-6">
      <div className="flex flex-col items-center gap-3 shrink-0">
        <div
          className="w-32 h-32 rounded-xl border border-border"
          style={{ backgroundColor: color }}
        />
        <input
          type="color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
          className="w-32 h-10 rounded-lg cursor-pointer bg-transparent border border-border"
        />
      </div>

      <div className="flex-1 flex flex-col gap-2">
        {values.map(({ label, value }) => (
          <div
            key={label}
            className="flex items-center gap-3 rounded-lg border border-border bg-background px-4 py-3"
          >
            <span className="text-xs text-muted w-12 shrink-0">{label}</span>
            <p className="flex-1 text-sm font-mono text-foreground">{value}</p>
            <button
              onClick={() => copy(value, label)}
              className="text-xs text-accent hover:text-accent-hover shrink-0"
            >
              {copiedField === label ? "Copied" : "Copy"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
