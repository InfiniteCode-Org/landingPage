export const metadata = {
  title: "About — Infinite Code",
};

export default function AboutPage() {
  return (
    <div className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">About</h1>
        <div className="mt-6 grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <p className="text-base text-foreground/80">
              Infinite Code FZ LLC partners with banks and financial institutions to design,
              build, and operate secure digital products. We specialize in trading systems,
              payments, and Web integrations, delivering compliant, scalable software across
              web and mobile.
            </p>
            <p className="mt-4 text-base text-foreground/80">
              Our team blends capital markets engineering with modern product development —
              cloud-native services, strong security practices, and the reliability that
              regulated environments demand.
            </p>
          </div>
          <aside className="rounded-xl border border-foreground/10 p-5 bg-background/60">
            <h2 className="text-sm font-medium">Registered Address</h2>
            <address className="mt-2 not-italic text-sm text-foreground/70">
              FOAM2286, Compass Building, Al Shobada Road,<br />
              Al Hamra Industrial Zone-FZ, Ras Al Khaimah,<br />
              United Arab Emirates
            </address>
          </aside>
        </div>
      </div>
    </div>
  );
}


