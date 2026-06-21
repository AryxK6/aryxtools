import Link from "next/link";
import { categories, getToolCountByCategory, getPopularTools } from "@/lib/tools-config";
import ToolCard from "@/components/ToolCard";

export default function Home() {
  const popular = getPopularTools(8);

  return (
    <div className="px-4 lg:px-8 py-10 lg:py-14 max-w-6xl mx-auto">
      {/* Hero */}
      <section className="mb-14">
        <p className="text-accent text-sm font-medium font-mono mb-3">
          100+ free tools, zero sign-up
        </p>
        <h1 className="font-display font-semibold text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight max-w-2xl">
          Every tool you reach for online, in one place.
        </h1>
        <p className="text-muted mt-4 max-w-xl text-base leading-relaxed">
          Text utilities, converters, calculators, generators, and developer
          tools. Built to be fast, work on any device, and respect your time.
        </p>
      </section>

      {/* Popular tools */}
      {popular.length > 0 && (
        <section className="mb-14">
          <h2 className="font-display font-semibold text-xl mb-5">Popular tools</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {popular.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        </section>
      )}

      {/* Categories */}
      <section>
        <h2 className="font-display font-semibold text-xl mb-5">Browse by category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {categories.map((cat) => {
            const count = getToolCountByCategory(cat.slug);
            return (
              <Link
                key={cat.slug}
                href={`/category/${cat.slug}`}
                className="group flex flex-col gap-1.5 rounded-xl border border-border bg-surface p-5 hover:border-accent/50 hover:bg-surface-hover transition-colors"
              >
                <div className="flex items-center justify-between">
                  <h3 className="font-medium text-foreground group-hover:text-accent transition-colors">
                    {cat.label}
                  </h3>
                  <span className="text-xs text-muted tabular-nums">{count}</span>
                </div>
                <p className="text-sm text-muted">{cat.description}</p>
              </Link>
            );
          })}
        </div>
      </section>
    </div>
  );
}
