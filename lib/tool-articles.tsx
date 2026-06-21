import dynamic from "next/dynamic";
import type { ComponentType } from "react";

export const toolArticles: Record<string, ComponentType> = {
  "word-counter": dynamic(() => import("@/content/articles/word-counter")),
  "case-converter": dynamic(() => import("@/content/articles/case-converter")),
  "json-formatter": dynamic(() => import("@/content/articles/json-formatter")),
  "password-generator": dynamic(() => import("@/content/articles/password-generator")),
  "color-picker": dynamic(() => import("@/content/articles/color-picker")),
  "percentage-calculator": dynamic(() => import("@/content/articles/percentage-calculator")),
  "age-calculator": dynamic(() => import("@/content/articles/age-calculator")),
  "qr-code-generator": dynamic(() => import("@/content/articles/qr-code-generator")),
  "unit-converter": dynamic(() => import("@/content/articles/unit-converter")),
  "lorem-ipsum-generator": dynamic(() => import("@/content/articles/lorem-ipsum-generator")),
};
