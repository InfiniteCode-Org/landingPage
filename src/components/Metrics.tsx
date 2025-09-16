"use client";

import { motion } from "framer-motion";

const metrics = [
  { value: "3+", label: "Continents", sub: "Projects delivered globally" },
  { value: "100K+", label: "Daily Active Users", sub: "Across platforms combined" },
  { value: "4", label: "Time Zones", sub: "Distributed engineering teams" },
];

export default function Metrics() {
  return (
    <section id="metrics" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-semibold tracking-tight"
        >
          Our footprint
        </motion.h2>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className="rounded-xl border border-foreground/10 bg-background/60 p-6"
            >
              <div className="text-4xl sm:text-5xl font-bold tabular-nums tracking-tight">
                {m.value}
              </div>
              <div className="mt-2 text-sm font-medium">{m.label}</div>
              <div className="mt-1 text-xs text-foreground/70">{m.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


