// =====================================================================
// CENTRAL TOOLS REGISTRY
// =====================================================================
// This is the single source of truth for every tool on the site.
// To add a new tool:
//   1. Add an entry to the `tools` array below
//   2. Build the matching component in /components/tools/[slug].tsx
//   3. Register it in /lib/tool-components.tsx
// Everything else (routing, sidebar, search, category pages, sitemap)
// is generated automatically from this file.
// =====================================================================

export type ToolCategory =
  | "text"
  | "converters"
  | "calculators"
  | "generators"
  | "developer"
  | "image"
  | "seo"
  | "pdf"
  | "color"
  | "misc";

export interface CategoryMeta {
  slug: ToolCategory;
  label: string;
  description: string;
}

export const categories: CategoryMeta[] = [
  { slug: "text", label: "Text Tools", description: "Counters, formatters, and text utilities" },
  { slug: "converters", label: "Converters", description: "Unit, file, and format conversion" },
  { slug: "calculators", label: "Calculators", description: "Finance, math, and everyday calculators" },
  { slug: "generators", label: "Generators", description: "Passwords, names, placeholder content" },
  { slug: "developer", label: "Developer Tools", description: "JSON, regex, encoding, and code utilities" },
  { slug: "image", label: "Image Tools", description: "Resize, compress, and convert images" },
  { slug: "seo", label: "SEO Tools", description: "Meta tags, keyword tools, schema generators" },
  { slug: "pdf", label: "PDF Tools", description: "Merge, split, and convert PDF files" },
  { slug: "color", label: "Color Tools", description: "Pickers, palettes, and contrast checkers" },
  { slug: "misc", label: "Other Tools", description: "Everything else that's useful" },
];

export interface ToolMeta {
  slug: string;
  name: string;
  shortDescription: string;
  category: ToolCategory;
  keywords: string[];
  // Optional: mark a tool as new or popular for badges
  isNew?: boolean;
  isPopular?: boolean;
}

export const tools: ToolMeta[] = [
  {
    slug: "word-counter",
    name: "Word Counter",
    shortDescription: "Count words, characters, sentences, and paragraphs instantly.",
    category: "text",
    keywords: ["word count", "character count", "text length"],
    isPopular: true,
  },
  {
    slug: "case-converter",
    name: "Case Converter",
    shortDescription: "Convert text to uppercase, lowercase, title case, and more.",
    category: "text",
    keywords: ["uppercase", "lowercase", "title case", "sentence case"],
  },
  {
    slug: "json-formatter",
    name: "JSON Formatter",
    shortDescription: "Format, validate, and beautify JSON data.",
    category: "developer",
    keywords: ["json beautify", "json validator", "json pretty print"],
    isPopular: true,
  },
  {
    slug: "password-generator",
    name: "Password Generator",
    shortDescription: "Create strong, random passwords with custom rules.",
    category: "generators",
    keywords: ["random password", "secure password", "password maker"],
    isPopular: true,
  },
  {
    slug: "color-picker",
    name: "Color Picker",
    shortDescription: "Pick colors and get HEX, RGB, and HSL values instantly.",
    category: "color",
    keywords: ["hex color", "rgb picker", "color code"],
  },
  {
    slug: "percentage-calculator",
    name: "Percentage Calculator",
    shortDescription: "Calculate percentages, increases, and decreases.",
    category: "calculators",
    keywords: ["percent calculator", "percentage increase", "percentage of a number"],
  },
  {
    slug: "age-calculator",
    name: "Age Calculator",
    shortDescription: "Calculate your exact age in years, months, and days.",
    category: "calculators",
    keywords: ["age calculator", "date of birth calculator", "how old am i"],
    isPopular: true,
  },
  {
    slug: "qr-code-generator",
    name: "QR Code Generator",
    shortDescription: "Create a free QR code for any link or text in seconds.",
    category: "generators",
    keywords: ["qr code maker", "free qr code", "qr generator online"],
    isPopular: true,
  },
  {
    slug: "unit-converter",
    name: "Unit Converter",
    shortDescription: "Convert length, weight, and temperature between units.",
    category: "converters",
    keywords: ["unit conversion", "length converter", "weight converter", "temperature converter"],
  },
  {
    slug: "lorem-ipsum-generator",
    name: "Lorem Ipsum Generator",
    shortDescription: "Generate placeholder text for designs and mockups.",
    category: "generators",
    keywords: ["lorem ipsum", "placeholder text", "dummy text generator"],
  },
];

// ---------------------------------------------------------------------
// Derived helpers, do not edit by hand
// ---------------------------------------------------------------------

export function getToolBySlug(slug: string): ToolMeta | undefined {
  return tools.find((t) => t.slug === slug);
}

export function getToolsByCategory(category: ToolCategory): ToolMeta[] {
  return tools.filter((t) => t.category === category);
}

export function getCategoryMeta(category: ToolCategory): CategoryMeta | undefined {
  return categories.find((c) => c.slug === category);
}

export function getPopularTools(limit = 8): ToolMeta[] {
  return tools.filter((t) => t.isPopular).slice(0, limit);
}

export function getToolCountByCategory(category: ToolCategory): number {
  return tools.filter((t) => t.category === category).length;
}

// ---------------------------------------------------------------------
// Static pages (About, Privacy, Terms, Contact) - footer links
// ---------------------------------------------------------------------

export interface StaticPageMeta {
  slug: string;
  label: string;
}

export const staticPages: StaticPageMeta[] = [
  { slug: "about", label: "About Us" },
  { slug: "contact", label: "Contact" },
  { slug: "privacy-policy", label: "Privacy Policy" },
  { slug: "terms-of-service", label: "Terms of Service" },
  { slug: "disclaimer", label: "Disclaimer" },
];
