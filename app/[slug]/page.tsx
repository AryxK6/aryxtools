import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { tools, getToolBySlug } from "@/lib/tools-config";
import { toolComponents } from "@/lib/tool-components";
import { toolArticles } from "@/lib/tool-articles";
import ToolShell from "@/components/ToolShell";

export function generateStaticParams() {
  return tools.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) return {};

  return {
    title: `${tool.name} - Free Online Tool | ARYX TOOLS`,
    description: tool.shortDescription,
    keywords: tool.keywords,
  };
}

export default async function ToolPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);
  if (!tool) return notFound();

  const ToolWidget = toolComponents[slug];
  const Article = toolArticles[slug];

  if (!ToolWidget) return notFound();

  return (
    <ToolShell
      tool={tool}
      widget={<ToolWidget />}
      article={Article ? <Article /> : undefined}
    />
  );
}
