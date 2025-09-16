"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { DotLottiePlayer } from "@dotlottie/react-player";

export default function Hero() {
  return (
    <section id="home" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-4xl sm:text-5xl font-bold tracking-tight"
            >
              Building secure and robust softwares
              <br className="hidden sm:block" /> for modern Web.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="mt-5 text-base sm:text-lg text-foreground/70 max-w-2xl"
            >
              UAE based Infinite Code delivers enterprise-grade IT web services and
               Platforms across web and mobile.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="mt-8 flex flex-col sm:flex-row gap-3"
            >
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-md bg-foreground text-background px-5 py-3 text-sm font-medium transition-colors hover:opacity-90"
              >
                Start a project
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-md border border-foreground/20 px-5 py-3 text-sm font-medium text-foreground/80 hover:text-foreground hover:border-foreground/40 transition-colors"
              >
                Learn more
              </Link>
            </motion.div>
          </div>
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="relative h-64 sm:h-80"
            >
              <DotLottiePlayer
                src="/handshake.lottie"
                autoplay
                loop
                className="w-full h-full"
                style={{ width: "100%", height: "100%" }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}


