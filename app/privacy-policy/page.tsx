import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | ARYX TOOLS",
  description: "Read the ARYX TOOLS privacy policy covering data collection, cookies, and advertising.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="px-4 lg:px-8 py-10 lg:py-14 max-w-2xl mx-auto">
      <h1 className="font-display font-semibold text-3xl tracking-tight mb-2">
        Privacy Policy
      </h1>
      <p className="text-sm text-muted mb-8">Last updated: June 2026</p>

      <div className="flex flex-col gap-6 text-foreground/90 leading-relaxed">
        <section>
          <h2 className="font-display font-semibold text-lg mb-2">
            How our tools handle your data
          </h2>
          <p>
            Almost every tool on ARYX TOOLS runs entirely in your browser.
            Text you type into the Word Counter, JSON you paste into the
            Formatter, or a password you generate is processed on your device
            and is never sent to our servers. We simply do not have the
            infrastructure to see it, because there is nothing for it to pass
            through.
          </p>
        </section>

        <section>
          <h2 className="font-display font-semibold text-lg mb-2">
            Cookies and advertising
          </h2>
          <p>
            We use Google AdSense to display ads on this site. Google and its
            partners may use cookies to serve ads based on your prior visits
            to this site or other sites on the internet. You can opt out of
            personalized advertising by visiting Google&apos;s Ads Settings
            page.
          </p>
          <p className="mt-3">
            Third-party vendors, including Google, use cookies to serve ads
            based on a user&apos;s prior visits to our website or other
            websites. Google&apos;s use of advertising cookies enables it and
            its partners to serve ads based on your visit to our site and/or
            other sites on the internet.
          </p>
        </section>

        <section>
          <h2 className="font-display font-semibold text-lg mb-2">
            Analytics
          </h2>
          <p>
            We may use standard analytics tools to understand which tools are
            popular and how the site is used overall. This data is
            aggregated and not tied to any individual identity that we
            collect ourselves, since we do not run user accounts.
          </p>
        </section>

        <section>
          <h2 className="font-display font-semibold text-lg mb-2">
            Children&apos;s privacy
          </h2>
          <p>
            ARYX TOOLS is not directed at children under 13, and we do not
            knowingly collect personal information from children.
          </p>
        </section>

        <section>
          <h2 className="font-display font-semibold text-lg mb-2">
            Changes to this policy
          </h2>
          <p>
            We may update this policy from time to time. Material changes
            will be reflected by updating the date at the top of this page.
          </p>
        </section>

        <section>
          <h2 className="font-display font-semibold text-lg mb-2">
            Contact
          </h2>
          <p>
            Questions about this policy can be sent through the{" "}
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
