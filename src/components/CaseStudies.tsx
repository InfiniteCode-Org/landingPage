"use client";

import { motion } from "framer-motion";
import Link from "next/link";

type CaseStudy = {
  title: string;
  summary: string;
  impact: string;
  href?: string;
};

const studies: CaseStudy[] = [
  {
    title: "Cross-border Payments Platform",
    summary:
      "Designed and built a compliant, real-time payments hub with multi-currency support.",
    impact: "Cut settlement time by 92% and reduced ops incidents to near-zero.",
  },
  {
    title: "Low-Latency Trading Stack",
    summary:
      "Implemented order routing, risk checks, and streaming market data with sub-ms p99.",
    impact: "Enabled 10x order throughput during peak market hours.",
  },
  {
    title: "Healthcare Telemetry Pipeline",
    summary:
      "HIPAA-aligned ingestion and analytics across mobile + web with anonymization by default.",
    impact: "Unified observability and accelerated feature cycle by 3x.",
  },
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-semibold tracking-tight"
        >
          Case studies
        </motion.h2>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {studies.map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="rounded-xl border border-foreground/10 bg-background/60 p-6"
            >
              <h3 className="text-base font-medium">{c.title}</h3>
              <p className="mt-2 text-sm text-foreground/70">{c.summary}</p>
              <p className="mt-3 text-sm text-foreground/80">
                <span className="font-medium">Impact:</span> {c.impact}
              </p>
              {c.href && (
                <Link
                  href={c.href}
                  className="mt-4 inline-flex text-sm underline underline-offset-2 hover:opacity-80"
                >
                  Read more
                </Link>
              )}
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}


