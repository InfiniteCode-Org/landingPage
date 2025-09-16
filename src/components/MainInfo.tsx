"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Web Applications",
    desc: "Responsive, performant apps tailored to enterprise workflows.",
  },
  {
    title: "Mobile Platforms",
    desc: "iOS/Android trading and banking apps with secure auth.",
  },
  {
    title: "Trading Systems",
    desc: "Low-latency order routing, risk, and real-time market data.",
  },
  {
    title: "Web Integrations",
    desc: "Smart contracts, custody, on/off-ramps, and compliance hooks.",
  },
  {
    title: "Security & Compliance",
    desc: "Regulated-ready design, audits, and observability by default.",
  },
  {
    title: "Cloud & DevOps",
    desc: "CI/CD, IaC, and observability for reliable operations.",
  },
];

export default function MainInfo() {
  return (
    <section id="services" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-semibold tracking-tight"
        >
          What we do
        </motion.h2>
        <div className="mt-8 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="rounded-xl border border-foreground/10 p-5 bg-background/60"
            >
              <h3 className="text-base font-medium">{s.title}</h3>
              <p className="mt-2 text-sm text-foreground/70">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


