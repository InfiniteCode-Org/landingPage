export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-foreground/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <p className="text-sm font-medium">Infinite Code FZ LLC</p>
          <address className="not-italic text-sm text-foreground/70">
            FOAM2286, Compass Building, Al Shobada Road,<br />
            Al Hamra Industrial Zone-FZ, Ras Al Khaimah,<br />
            United Arab Emirates
          </address>
        </div>
        <div className="flex items-end sm:items-center sm:justify-end">
          <p className="text-xs text-foreground/60">
            © {year} Infinite Code. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}


