"use client";

import { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";

type ServiceDetail = {
  title: string;
  description: string;
};

const SERVICES: ServiceDetail[] = [
  {
    title: "Web Applications",
    description:
      "We design accessible, responsive UIs backed by robust APIs. Clean domain models and type-safe contracts reduce bugs. Performance budgets and caching strategies keep experiences snappy.",
  },
  {
    title: "Mobile Platforms",
    description:
      "Offline-first data and secure auth (biometrics, device-bound keys). Smooth native-feel interactions with careful UX polish. Release pipelines cover QA, store checks, and staged rollouts.",
  },
  {
    title: "Trading Systems",
    description:
      "Deterministic order flow with guardrails for risk and compliance. Real-time data via websockets with backpressure control. Latency-aware observability supports incident response.",
  },
  {
    title: "Web Integrations",
    description:
      "Wallet and custody flows that prioritize safety. Smart contract integrations with testnets and audits. KYC/AML vendor hooks and reporting for regulated contexts.",
  },
  {
    title: "Security & Compliance",
    description:
      "Threat modeling informs design before code is written. Secrets management and least-privilege by default. Audit trails and policy-as-code align with regulatory needs.",
  },
  {
    title: "Cloud & DevOps",
    description:
      "CI/CD with preview environments speeds feedback. IaC provides reproducible infra with cost visibility. Metrics, logs, and tracing deliver actionable SLOs.",
  },
];

export default function ServicesCarousel() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaRef, embla] = useEmblaCarousel({ loop: false, align: "start" });

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const scrollTo = useCallback((i: number) => embla && embla.scrollTo(i), [embla]);

  useEffect(() => {
    if (!embla) return;
    const onSelect = () => setSelectedIndex(embla.selectedScrollSnap());
    embla.on("select", onSelect);
    onSelect();
    return () => {
      embla.off("select", onSelect);
    };
  }, [embla]);

  return (
    <section id="services-details" className="py-16 sm:py-4">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-2xl sm:text-3xl font-semibold tracking-tight"
        >
          Service details
        </motion.h2>

        <div className="relative mt-8">
          <div className="overflow-hidden rounded-xl border border-foreground/10 bg-background/60" ref={emblaRef}>
            <div className="flex">
              {SERVICES.map((s) => (
                <div key={s.title} className="min-w-0 flex-[0_0_100%]">
                  <div className="p-6 sm:p-8 flex items-center justify-center">
                    <div className="max-w-2xl min-h-[200px] sm:min-h-[100px]">
                      <h3 className="text-base sm:text-lg font-medium">{s.title}</h3>
                      <p className="mt-3 text-sm sm:text-base text-foreground/80 leading-relaxed">
                        {s.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            type="button"
            aria-label="Previous"
            onClick={scrollPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-md border border-foreground/10 bg-background/80 px-3 py-2 text-sm hover:bg-background/95"
          >
            ←
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={scrollNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-md border border-foreground/10 bg-background/80 px-3 py-2 text-sm hover:bg-background/95"
          >
            →
          </button>

          <div className="mt-4 flex items-center justify-center gap-2">
            {SERVICES.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => scrollTo(i)}
                className={`h-2.5 w-2.5 rounded-full border border-foreground/20 ${
                  i === selectedIndex ? "bg-foreground/70" : "bg-transparent"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}


