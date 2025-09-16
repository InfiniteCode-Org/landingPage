"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ContactSection() {
  const [sentOpen, setSentOpen] = useState(false);

  useEffect(() => {
    if (!sentOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSentOpen(false);
    };
    window.addEventListener("keydown", onKey);
    const timeout = setTimeout(() => setSentOpen(false), 2500);
    return () => {
      window.removeEventListener("keydown", onKey);
      clearTimeout(timeout);
    };
  }, [sentOpen]);

  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-semibold tracking-tight"
        >
          Contact us
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-3 text-sm sm:text-base text-foreground/70"
        >
          Tell us about your project and timelines. We typically reply within 1 business day.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          onSubmit={(e) => {
            e.preventDefault();
            const form = e.currentTarget as HTMLFormElement;
            form.reset();
            setSentOpen(true);
          }}
          className="mt-8 grid gap-4 sm:grid-cols-2"
        >
          <div className="grid gap-2">
            <label htmlFor="name" className="text-sm text-foreground/80">Name</label>
            <input id="name" required className="h-11 rounded-md border border-foreground/15 bg-background/60 px-3 text-sm outline-none focus:ring-2 focus:ring-foreground/20" />
          </div>
          <div className="grid gap-2">
            <label htmlFor="email" className="text-sm text-foreground/80">Email</label>
            <input id="email" type="email" required className="h-11 rounded-md border border-foreground/15 bg-background/60 px-3 text-sm outline-none focus:ring-2 focus:ring-foreground/20" />
          </div>
          <div className="sm:col-span-2 grid gap-2">
            <label htmlFor="message" className="text-sm text-foreground/80">Message</label>
            <textarea id="message" rows={5} required className="rounded-md border border-foreground/15 bg-background/60 p-3 text-sm outline-none focus:ring-2 focus:ring-foreground/20" />
          </div>
          <div>
            <button type="submit" className="inline-flex items-center justify-center rounded-md bg-foreground text-background px-5 py-2.5 text-sm font-medium transition-opacity hover:opacity-90">
              Send message
            </button>
          </div>
        </motion.form>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mt-8 text-sm text-foreground/70"
        >
          Prefer email? Reach us at <a className="underline hover:opacity-80" href="mailto:contact@infinitecode.org">contact@infinitecode.org</a>
        </motion.div>
      </div>

      {sentOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={() => setSentOpen(false)}
        >
          <motion.div
            initial={{ y: 12, scale: 0.98, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 220, damping: 22 }}
            className="mx-4 w-full max-w-sm rounded-2xl border border-foreground/15 bg-background p-6 text-center shadow-xl"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Mail sent"
          >
            <div className="text-2xl font-semibold">Mail Sent</div>
            <div className="mt-2 text-sm text-foreground/70">
              Thanks for reaching out. Well get back to you shortly.
            </div>
            <button
              className="mt-5 inline-flex items-center justify-center rounded-md bg-foreground px-4 py-2 text-sm font-medium text-background hover:opacity-90"
              onClick={() => setSentOpen(false)}
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}


