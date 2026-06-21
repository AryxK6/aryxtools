import Link from "next/link";
import CommandSearch from "./CommandSearch";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 h-16 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="h-full px-4 lg:px-6 flex items-center gap-6">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="font-display font-semibold text-lg tracking-tight">
            ARYX<span className="text-accent">TOOLS</span>
          </span>
        </Link>

        <div className="flex-1 flex justify-center max-w-2xl mx-auto">
          <CommandSearch />
        </div>

        <nav className="hidden md:flex items-center gap-5 shrink-0 text-sm text-muted">
          <Link href="/" className="hover:text-foreground transition-colors">
            All Tools
          </Link>
        </nav>
      </div>
    </header>
  );
}
