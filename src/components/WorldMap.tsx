"use client";

import { DotLottiePlayer } from "@dotlottie/react-player";

export default function WorldMap() {
  return (
    <section id="world-map" className="py-8 sm:py-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="relative h-64 sm:h-80 rounded-2xl overflow-hidden">
          <DotLottiePlayer
            src="/Hathora%20World%20Map.lottie"
            autoplay
            loop
            className="w-full h-full"
            style={{ width: "100%", height: "100%" }}
          />
        </div>
      </div>
    </section>
  );
}


