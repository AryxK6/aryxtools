import { notFound } from "next/navigation";
import { categories, getToolsByCategory, getCategoryMeta } from "@/lib/tools-config";
import ToolCard from "@/components/ToolCard";

export function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const meta = getCategoryMeta(slug as never);
  if (!meta) return notFound();

  const toolsInCategory = getToolsByCategory(meta.slug);

  return (
    <div className="px-4 lg:px-8 py-10 lg:py-14 max-w-6xl mx-auto">
      <p className="text-accent text-sm font-mono mb-2">{toolsInCategory.length} tools</p>
      <h1 className="font-display font-semibold text-3xl tracking-tight mb-2">
        {meta.label}
      </h1>
      <p className="text-muted mb-10 max-w-xl">{meta.description}</p>

      {toolsInCategory.length === 0 ? (
        <p className="text-muted text-sm">No tools in this category yet. Check back soon.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {toolsInCategory.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      )}
    </div>
  );
}
