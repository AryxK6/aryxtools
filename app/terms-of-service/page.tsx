import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | ARYX TOOLS",
  description: "Terms and conditions for using ARYX TOOLS and its free online tools.",
};

export default function TermsPage() {
  return (
    <div className="px-4 lg:px-8 py-10 lg:py-14 max-w-2xl mx-auto">
      <h1 className="font-display font-semibold text-3xl tracking-tight mb-2">
        Terms of Service
      </h1>
      <p className="text-sm text-muted mb-8">Last updated: June 2026</p>

      <div className="flex flex-col gap-6 text-foreground/90 leading-relaxed">
        <section>
          <h2 className="font-display font-semibold text-lg mb-2">
            Using ARYX TOOLS
          </h2>
          <p>
            ARYX TOOLS provides free, browser-based utilities for text
            processing, conversion, calculation, and similar everyday tasks.
            By using this site, you agree to use these tools for lawful
            purposes only.
          </p>
        </section>

        <section>
          <h2 className="font-display font-semibold text-lg mb-2">
            No warranty
          </h2>
          <p>
            Tools are provided as is, without warranty of any kind. While we
            test each tool before publishing it, we cannot guarantee that
            results will always be error-free, and you should verify
            critical calculations independently, especially for financial,
            legal, or medical decisions.
          </p>
        </section>

        <section>
          <h2 className="font-display font-semibold text-lg mb-2">
            Limitation of liability
          </h2>
          <p>
            ARYX TOOLS and its operators are not liable for any damages
            arising from the use, or inability to use, any tool on this
            site.
          </p>
        </section>

        <section>
          <h2 className="font-display font-semibold text-lg mb-2">
            Intellectual property
          </h2>
          <p>
            The site design, branding, and written content are owned by ARYX
            Tools. The output you generate using our tools, such as a
            password or a converted file, belongs entirely to you.
          </p>
        </section>

        <section>
          <h2 className="font-display font-semibold text-lg mb-2">
            Changes to the service
          </h2>
          <p>
            We may add, modify, or remove tools at any time without prior
            notice.
          </p>
        </section>

        <section>
          <h2 className="font-display font-semibold text-lg mb-2">
            Contact
          </h2>
          <p>
            Questions about these terms can be sent through the{" "}
            <Link href="/contact" className="text-accent hover:text-accent-hover">
              contact page
            </Link>
            .
          </p>
        </section>
      </div>
    </div>
  );
}
