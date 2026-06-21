import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us | ARYX TOOLS",
  description:
    "ARYX TOOLS is a free collection of browser-based utilities built by Aryx K. Learn what the site covers and how it operates.",
};

export default function AboutPage() {
  return (
    <div className="px-4 lg:px-8 py-10 lg:py-14 max-w-3xl mx-auto flex flex-col gap-5">
      {/* Hero section */}
      <section className="rounded-xl border border-border bg-surface p-6 sm:p-8">
        <h1 className="font-display font-semibold text-3xl sm:text-4xl tracking-tight mb-5">
          About ARYX TOOLS
        </h1>
        <div className="flex flex-col gap-4 text-foreground/90 leading-relaxed">
          <p>
            Most tool sites online make the same two mistakes. They bury a
            simple utility under five pop-ups and a fake download button, or
            they pad the page with so much filler that finding the actual
            tool takes longer than the task itself would have taken by hand.
            ARYX TOOLS is an attempt to fix that.
          </p>
          <p>
            Every tool here runs directly in your browser. There is no
            account to create, no file to download, and in almost every
            case, nothing ever leaves your device. A word counter does not
            need a server round trip, and a password generator should never
            see the password it just made for you. The site is built around
            that one principle.
          </p>
          <p>
            <strong>ARYX TOOLS launched in 2026.</strong> It started with a
            small set of everyday utilities and is growing into a larger
            library, with new tools added regularly rather than all at once.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-7">
          <Stat value="10+" label="Tools live" color="text-accent" />
          <Stat value="100+" label="Planned" color="text-success" />
          <Stat value="2026" label="Building since" color="text-warning" />
          <Stat value="Free" label="Always" color="text-danger" />
        </div>
      </section>

      {/* What the site covers */}
      <section className="rounded-xl border border-border bg-surface p-6 sm:p-8">
        <p className="text-xs font-medium text-muted uppercase tracking-wide mb-5 pb-3 border-b border-border">
          What this site covers
        </p>
        <p className="text-foreground/90 leading-relaxed mb-5">
          ARYX TOOLS is organized into a handful of categories, each one
          built around a real, recurring task rather than a vague theme.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <CategoryCard
            title="Text Tools"
            description="Word counters, case converters, and formatting utilities for cleaning up and checking text before it goes anywhere public."
          />
          <CategoryCard
            title="Developer Tools"
            description="JSON formatting, validation, and other small utilities aimed at the repetitive parts of working with code and data."
          />
          <CategoryCard
            title="Generators"
            description="Passwords, QR codes, and placeholder text, the kind of thing you need generated correctly and securely, not guessed at by hand."
          />
          <CategoryCard
            title="Calculators & Converters"
            description="Percentages, age, units. Calculations people get slightly wrong by hand often enough that a dedicated tool is worth having."
          />
        </div>

        <p className="text-foreground/90 leading-relaxed mt-6">
          Every tool is tested before it goes live, and every tool page
          includes a written explanation of how the calculation or
          conversion actually works, not just a bare input box. If
          something here is wrong or unclear, the{" "}
          <Link href="/contact" className="text-accent hover:text-accent-hover">
            contact page
          </Link>{" "}
          is the fastest way to flag it.
        </p>
      </section>

      {/* Author block */}
      <section className="rounded-xl border border-border bg-surface p-6 sm:p-8">
        <p className="text-xs font-medium text-muted uppercase tracking-wide mb-5 pb-3 border-b border-border">
          The person behind it
        </p>
        <div className="flex items-start gap-5">
          <div className="w-[72px] h-[72px] rounded-full overflow-hidden shrink-0 border-2 border-border bg-accent-muted relative">
            <Image
              src="https://i.ibb.co/1YWBXwxG/ARYX.png"
              alt="Aryx K."
              fill
              sizes="72px"
              className="object-cover"
            />
          </div>
          <div>
            <p className="font-display font-semibold text-xl text-foreground mb-1">
              Aryx K.
            </p>
            <p className="text-xs font-medium tracking-wide uppercase text-accent mb-3">
              Builder & Content Creator
            </p>
            <p className="text-sm text-foreground/80 leading-relaxed">
              Building content and tool sites since 2026. ARYX TOOLS is the
              hands-on counterpart to ARYX Guide, a separate site covering
              AI tools, health and beauty, and study and career guidance.
              Where the guide explains things, this site is for actually
              doing the small, repetitive tasks instead of reading about
              them.
            </p>
          </div>
        </div>

        <h2 className="font-display font-semibold text-lg mt-7 mb-4">
          Background
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <WorkItem text="Built and launched content and tool sites from scratch with no existing audience or budget to start from." />
          <WorkItem text="Tested dozens of online utilities and converters across real tasks to understand what actually makes a tool usable versus just functional." />
          <WorkItem text="Worked with on-page SEO, Google Search Console, and AdSense for new sites with no backlink profile yet." />
          <WorkItem text="Designed every tool here around a single rule: it should be faster to use this page than to do the task by hand." />
        </div>

        <Link
          href="/contact"
          className="flex items-center gap-3 mt-6 rounded-lg border border-border bg-background px-4 py-3.5 hover:border-accent/50 transition-colors"
        >
          <span className="text-sm text-foreground/80">
            Questions or want to get in touch?{" "}
            <span className="text-accent font-medium">Send a message →</span>
          </span>
        </Link>
      </section>

      {/* How the site operates */}
      <section className="rounded-xl border border-border bg-surface p-6 sm:p-8">
        <p className="text-xs font-medium text-muted uppercase tracking-wide mb-5 pb-3 border-b border-border">
          How this site operates
        </p>
        <div className="flex flex-col gap-4 text-foreground/90 leading-relaxed">
          <p>
            Every tool is tested before publishing, and the article
            accompanying each tool is written from scratch for that specific
            tool, not assembled from a template. If a calculation has an
            edge case worth knowing about, it gets mentioned rather than
            glossed over.
          </p>
          <p>
            ARYX TOOLS runs on Google AdSense to cover hosting and ongoing
            development. That is explained in full on the{" "}
            <Link href="/privacy-policy" className="text-accent hover:text-accent-hover">
              Privacy Policy
            </Link>{" "}
            page. Tools stay free regardless. The ads pay for the site, not
            the other way around.
          </p>
          <p>
            If something on this site is wrong, outdated, or just confusing,
            the{" "}
            <Link href="/contact" className="text-accent hover:text-accent-hover">
              contact form
            </Link>{" "}
            reaches a real inbox and gets a real reply.
          </p>
        </div>
      </section>
    </div>
  );
}

function Stat({
  value,
  label,
  color,
}: {
  value: string;
  label: string;
  color: string;
}) {
  return (
    <div className="rounded-lg border border-border bg-background px-4 py-4 text-center">
      <p className={`font-display font-semibold text-2xl mb-1 ${color}`}>
        {value}
      </p>
      <p className="text-xs text-muted font-medium">{label}</p>
    </div>
  );
}

function CategoryCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-lg border border-border bg-background p-4">
      <p className="font-medium text-sm text-foreground mb-2">{title}</p>
      <p className="text-xs text-muted leading-relaxed">{description}</p>
    </div>
  );
}

function WorkItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-2.5 rounded-lg border border-border bg-background px-3.5 py-3">
      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0 mt-1.5" />
      <span className="text-xs text-muted leading-relaxed">{text}</span>
    </div>
  );
}
