import Link from "next/link";
import type { ToolMeta } from "@/lib/tools-config";
import { getCategoryMeta, getToolsByCategory } from "@/lib/tools-config";
import ToolCard from "@/components/ToolCard";

export default function ToolShell({
  tool,
  widget,
  article,
}: {
  tool: ToolMeta;
  widget: React.ReactNode;
  article?: React.ReactNode;
}) {
  const categoryMeta = getCategoryMeta(tool.category);
  const related = getToolsByCategory(tool.category)
    .filter((t) => t.slug !== tool.slug)
    .slice(0, 3);

  return (
    <div className="px-4 lg:px-8 py-8 lg:py-12 max-w-4xl mx-auto">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-1.5 text-xs text-muted mb-6">
        <Link href="/" className="hover:text-foreground transition-colors">
          Home
        </Link>
        <span>/</span>
        {categoryMeta && (
          <>
            <Link
              href={`/category/${categoryMeta.slug}`}
              className="hover:text-foreground transition-colors"
            >
              {categoryMeta.label}
            </Link>
            <span>/</span>
          </>
        )}
        <span className="text-foreground">{tool.name}</span>
      </nav>

      {/* Title */}
      <header className="mb-8">
        <h1 className="font-display font-semibold text-2xl sm:text-3xl tracking-tight mb-2">
          {tool.name}
        </h1>
        <p className="text-muted text-base max-w-xl">{tool.shortDescription}</p>
      </header>

      {/* Tool widget itself */}
      <section className="rounded-xl border border-border bg-surface p-5 sm:p-6">
        {widget}
      </section>

      {/* Related tools */}
      {related.length > 0 && (
        <section className="mt-12">
          <h2 className="font-display font-semibold text-lg mb-4">
            More {categoryMeta?.label.toLowerCase()}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {related.map((t) => (
              <ToolCard key={t.slug} tool={t} />
            ))}
          </div>
        </section>
      )}

      {/* SEO article */}
      {article && (
        <section className="mt-14 pt-12 border-t border-border">
          {article}
        </section>
      )}
    </div>
  );
}
