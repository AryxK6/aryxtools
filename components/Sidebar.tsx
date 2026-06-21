import Link from "next/link";
import { categories, getToolCountByCategory } from "@/lib/tools-config";

export default function Sidebar() {
  return (
    <aside className="hidden lg:flex w-64 shrink-0 flex-col border-r border-border bg-surface/40 h-[calc(100vh-64px)] sticky top-16 overflow-y-auto">
      <nav className="p-4 flex flex-col gap-1">
        <p className="px-3 pt-2 pb-3 text-xs font-medium tracking-wide text-muted uppercase">
          Categories
        </p>
        {categories.map((cat) => {
          const count = getToolCountByCategory(cat.slug);
          return (
            <Link
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className="group flex items-center justify-between rounded-lg px-3 py-2.5 text-sm text-foreground/80 hover:text-foreground hover:bg-surface-hover transition-colors"
            >
              <span>{cat.label}</span>
              <span className="text-xs text-muted group-hover:text-accent tabular-nums">
                {count}
              </span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
