import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Disclaimer | ARYX TOOLS",
  description: "Disclaimer covering the accuracy and intended use of ARYX TOOLS' free online tools.",
};

export default function DisclaimerPage() {
  return (
    <div className="px-4 lg:px-8 py-10 lg:py-14 max-w-2xl mx-auto">
      <h1 className="font-display font-semibold text-3xl tracking-tight mb-2">
        Disclaimer
      </h1>
      <p className="text-sm text-muted mb-8">Last updated: June 2026</p>

      <div className="flex flex-col gap-6 text-foreground/90 leading-relaxed">
        <section>
          <h2 className="font-display font-semibold text-lg mb-2">
            General information only
          </h2>
          <p>
            The tools and articles on ARYX TOOLS are provided for general,
            informational, and practical use. Calculators such as the
            Percentage Calculator or Age Calculator are meant to save you
            time on everyday math, not to replace professional financial,
            legal, medical, or tax advice.
          </p>
        </section>

        <section>
          <h2 className="font-display font-semibold text-lg mb-2">
            Accuracy
          </h2>
          <p>
            We aim for every tool to be accurate, and we test each one before
            it goes live. That said, no automated tool is infallible. For
            anything with real financial or legal consequences, double-check
            the result before relying on it.
          </p>
        </section>

        <section>
          <h2 className="font-display font-semibold text-lg mb-2">
            Third-party links
          </h2>
          <p>
            Some pages may link to external resources for further reading.
            We do not control and are not responsible for the content of
            external sites.
          </p>
        </section>

        <section>
          <h2 className="font-display font-semibold text-lg mb-2">
            Contact
          </h2>
          <p>
            If you spot an error in a tool or an article, let us know
            through the{" "}
            <Link href="/contact" className="text-accent hover:text-accent-hover">
              contact page
            </Link>{" "}
            and we will fix it.
          </p>
        </section>
      </div>
    </div>
  );
}
