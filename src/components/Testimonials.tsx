"use client";

import { motion } from "framer-motion";

type Testimonial = {
  quote: string;
  name: string;
  title: string;
  company: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "Infinite Code delivered ahead of schedule and nailed the user experience on the first pass.",
    name: "Aisha K.",
    title: "CTO",
    company: "FintechCo",
  },
  {
    quote:
      "Their engineering rigor and security mindset were evident throughout the project lifecycle.",
    name: "Daniel M.",
    title: "Head of Engineering",
    company: "Global Trade Desk",
  },
  {
    quote:
      "We scaled from a prototype to production with zero downtime during launch.",
    name: "Sara V.",
    title: "Product Lead",
    company: "HealthOps",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-semibold tracking-tight"
        >
          What clients say
        </motion.h2>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name + t.company}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              className="rounded-xl border border-foreground/10 bg-background/60 p-6"
            >
              <blockquote className="text-sm sm:text-base text-foreground/80">
                “{t.quote}”
              </blockquote>
              <figcaption className="mt-4 text-xs sm:text-sm text-foreground/70">
                <span className="font-medium text-foreground">{t.name}</span> · {t.title} at {t.company}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}


