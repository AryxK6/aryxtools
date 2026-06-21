"use client";

import { useEffect, useRef, useState } from "react";
import QRCode from "qrcode";

export default function QrCodeGenerator() {
  const [text, setText] = useState("");
  const [size, setSize] = useState(280);
  const [fgColor, setFgColor] = useState("#0a0a0b");
  const [bgColor, setBgColor] = useState("#ffffff");
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [error, setError] = useState("");
  const hasCode = text.trim().length > 0 && !error;
  const displayError = text.trim().length > 0 ? error : "";

  useEffect(() => {
    if (!text.trim()) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    QRCode.toCanvas(
      canvas,
      text,
      {
        width: size,
        margin: 2,
        color: { dark: fgColor, light: bgColor },
      },
      (err) => {
        setError(err ? "Could not generate QR code for this input." : "");
      }
    );
  }, [text, size, fgColor, bgColor]);

  function download() {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = "qr-code.png";
    link.href = canvas.toDataURL("image/png");
    link.click();
  }

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      <div className="flex-1 flex flex-col gap-4">
        <div>
          <label className="block text-sm text-muted mb-2">
            Text or URL
          </label>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="https://example.com or any text"
            rows={3}
            className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted outline-none focus:border-accent/60 resize-y"
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="text-sm text-muted">Size</label>
            <span className="text-sm text-muted tabular-nums">{size}px</span>
          </div>
          <input
            type="range"
            min={150}
            max={500}
            step={10}
            value={size}
            onChange={(e) => setSize(Number(e.target.value))}
            className="w-full accent-accent"
          />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-sm text-muted mb-2">Foreground</label>
            <input
              type="color"
              value={fgColor}
              onChange={(e) => setFgColor(e.target.value)}
              className="w-full h-10 rounded-lg cursor-pointer bg-transparent border border-border"
            />
          </div>
          <div>
            <label className="block text-sm text-muted mb-2">Background</label>
            <input
              type="color"
              value={bgColor}
              onChange={(e) => setBgColor(e.target.value)}
              className="w-full h-10 rounded-lg cursor-pointer bg-transparent border border-border"
            />
          </div>
        </div>

        {displayError && (
          <p className="text-sm text-danger bg-danger/10 border border-danger/30 rounded-lg px-4 py-3">
            {displayError}
          </p>
        )}
      </div>

      <div className="flex flex-col items-center justify-center gap-4 rounded-lg border border-border bg-background p-6 lg:w-72 shrink-0">
        {text.trim() ? (
          <canvas ref={canvasRef} className="rounded" />
        ) : (
          <p className="text-sm text-muted text-center py-16">
            Your QR code will appear here
          </p>
        )}
        {hasCode && (
          <button
            onClick={download}
            className="w-full rounded-lg bg-accent hover:bg-accent-hover text-white text-sm font-medium px-4 py-2.5 transition-colors"
          >
            Download PNG
          </button>
        )}
      </div>
    </div>
  );
}
