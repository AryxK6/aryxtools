import Link from "next/link";
import { categories, staticPages } from "@/lib/tools-config";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border mt-20">
      <div className="max-w-6xl mx-auto px-4 lg:px-8 py-12 grid grid-cols-2 sm:grid-cols-4 gap-8">
        <div className="col-span-2 sm:col-span-1">
          <Link href="/" className="font-display font-semibold text-lg">
            ARYX<span className="text-accent">TOOLS</span>
          </Link>
          <p className="text-sm text-muted mt-3 leading-relaxed">
            Free online tools that work in your browser. No sign-up, no
            installs.
          </p>
        </div>

        <div>
          <p className="text-xs font-medium text-muted uppercase tracking-wide mb-3">
            Categories
          </p>
          <ul className="flex flex-col gap-2">
            {categories.slice(0, 5).map((cat) => (
              <li key={cat.slug}>
                <Link
                  href={`/category/${cat.slug}`}
                  className="text-sm text-foreground/80 hover:text-accent transition-colors"
                >
                  {cat.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-medium text-muted uppercase tracking-wide mb-3">
            More categories
          </p>
          <ul className="flex flex-col gap-2">
            {categories.slice(5).map((cat) => (
              <li key={cat.slug}>
                <Link
                  href={`/category/${cat.slug}`}
                  className="text-sm text-foreground/80 hover:text-accent transition-colors"
                >
                  {cat.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-medium text-muted uppercase tracking-wide mb-3">
            Company
          </p>
          <ul className="flex flex-col gap-2">
            {staticPages.map((page) => (
              <li key={page.slug}>
                <Link
                  href={`/${page.slug}`}
                  className="text-sm text-foreground/80 hover:text-accent transition-colors"
                >
                  {page.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="max-w-6xl mx-auto px-4 lg:px-8 py-5 text-xs text-muted">
          © {year} ARYX TOOLS. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
