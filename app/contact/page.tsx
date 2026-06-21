import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | ARYX TOOLS",
  description:
    "Get in touch with ARYX TOOLS. Questions about a tool, a bug report, or a tool request, the inbox is open.",
};

export default function ContactPage() {
  return (
    <div className="px-4 lg:px-8 py-10 lg:py-14 max-w-3xl mx-auto flex flex-col gap-5">
      {/* Intro card */}
      <section className="rounded-xl border border-border bg-surface p-6 sm:p-8">
        <h1 className="font-display font-semibold text-3xl sm:text-4xl tracking-tight mb-5">
          Get in Touch
        </h1>
        <div className="flex flex-col gap-4 text-foreground/90 leading-relaxed">
          <p>
            The inbox is open. If a tool gave you a wrong result, broke on
            your phone, or you just want a tool added that does not exist
            yet, a message gets a real reply, usually within 24 hours.
          </p>
          <p>
            For business inquiries, collaboration ideas, or anything that
            needs a longer back-and-forth, mention what it is about in the
            message below and it gets handled faster.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-6">
          <Reason color="bg-accent" text="Bug reports or a tool giving an incorrect result" />
          <Reason color="bg-success" text="Requests for a new tool that should exist here" />
          <Reason color="bg-warning" text="Corrections to an article or explanation" />
          <Reason color="bg-danger" text="Mobile or browser display issues" />
          <Reason color="bg-accent" text="Collaboration or partnership inquiries" />
          <Reason color="bg-success" text="Anything else worth flagging" />
        </div>
      </section>

      {/* Form card */}
      <section className="rounded-xl border border-border bg-surface p-6 sm:p-8">
        <p className="font-display font-semibold text-lg mb-6">
          Send a Message
        </p>
        <ContactForm />
      </section>
    </div>
  );
}

function Reason({ color, text }: { color: string; text: string }) {
  return (
    <div className="flex items-start gap-2.5 rounded-lg border border-border bg-background px-3.5 py-3 text-xs text-muted leading-relaxed">
      <span className={`w-1.5 h-1.5 rounded-full ${color} shrink-0 mt-1`} />
      {text}
    </div>
  );
}
