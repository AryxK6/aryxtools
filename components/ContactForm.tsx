"use client";

import { useState } from "react";

// Shared Formspree endpoint used across ARYX TOOLS and ARYX Guide. Each
// submission includes the source site so messages from either site can be
// told apart in the inbox.
const FORM_ENDPOINT = "https://formspree.io/f/maqpbvgy";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5">
      <input type="hidden" name="_subject" value="New message from ARYX TOOLS" />
      <input type="hidden" name="source_site" value="ARYX TOOLS (aryxtools.vercel.app)" />

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Field label="Your Name">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            required
            className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted outline-none focus:border-accent/60"
          />
        </Field>
        <Field label="Email Address">
          <input
            type="email"
            name="email"
            placeholder="you@example.com"
            required
            className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted outline-none focus:border-accent/60"
          />
        </Field>
      </div>

      <Field label="Topic">
        <select
          name="topic"
          defaultValue=""
          className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none focus:border-accent/60"
        >
          <option value="">Select a topic</option>
          <option value="Bug report">Bug report</option>
          <option value="New tool request">New tool request</option>
          <option value="Article correction">Article correction</option>
          <option value="Mobile or display issue">Mobile or display issue</option>
          <option value="Collaboration">Collaboration or partnership</option>
          <option value="Other">Something else</option>
        </select>
      </Field>

      <Field label="Message">
        <textarea
          name="message"
          placeholder="What would you like to say?"
          required
          rows={6}
          className="w-full rounded-lg border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted outline-none focus:border-accent/60 resize-y"
        />
      </Field>

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-lg bg-accent hover:bg-accent-hover disabled:opacity-50 disabled:cursor-not-allowed text-white text-sm font-semibold uppercase tracking-wide px-4 py-3.5 transition-colors"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <p className="text-center text-sm font-medium text-success bg-success/10 border border-success/25 rounded-lg px-4 py-3">
          Message sent. You will hear back within 24 hours.
        </p>
      )}
      {status === "error" && (
        <p className="text-center text-sm font-medium text-danger bg-danger/10 border border-danger/25 rounded-lg px-4 py-3">
          Something went wrong. Please try again, or email us directly
          below.
        </p>
      )}

      <p className="text-xs text-muted text-center leading-relaxed">
        Typical response time is within 24 hours. For urgent matters,
        mention it in your message.
      </p>
    </form>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-xs font-bold tracking-wider uppercase text-muted">
        {label}
      </label>
      {children}
    </div>
  );
}
