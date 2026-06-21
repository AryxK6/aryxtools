import dynamic from "next/dynamic";
import type { ComponentType } from "react";

// Each tool's interactive widget, lazy-loaded by slug.
export const toolComponents: Record<string, ComponentType> = {
  "word-counter": dynamic(() => import("@/components/tools/WordCounter")),
  "case-converter": dynamic(() => import("@/components/tools/CaseConverter")),
  "json-formatter": dynamic(() => import("@/components/tools/JsonFormatter")),
  "password-generator": dynamic(() => import("@/components/tools/PasswordGenerator")),
  "color-picker": dynamic(() => import("@/components/tools/ColorPicker")),
  "percentage-calculator": dynamic(() => import("@/components/tools/PercentageCalculator")),
  "age-calculator": dynamic(() => import("@/components/tools/AgeCalculator")),
  "qr-code-generator": dynamic(() => import("@/components/tools/QrCodeGenerator")),
  "unit-converter": dynamic(() => import("@/components/tools/UnitConverter")),
  "lorem-ipsum-generator": dynamic(() => import("@/components/tools/LoremIpsumGenerator")),
};
