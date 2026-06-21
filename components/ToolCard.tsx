import Link from "next/link";
import type { ToolMeta } from "@/lib/tools-config";

export default function ToolCard({ tool }: { tool: ToolMeta }) {
  return (
    <Link
      href={`/${tool.slug}`}
      className="group flex flex-col gap-2 rounded-xl border border-border bg-surface p-4 hover:border-accent/50 hover:bg-surface-hover transition-colors"
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-medium text-sm text-foreground group-hover:text-accent transition-colors">
          {tool.name}
        </h3>
        {tool.isNew && (
          <span className="shrink-0 rounded-full bg-accent-muted text-accent text-[10px] font-medium px-2 py-0.5">
            NEW
          </span>
        )}
      </div>
      <p className="text-xs text-muted leading-relaxed">{tool.shortDescription}</p>
    </Link>
  );
}
