"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <motion.header
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-40 w-full backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b border-foreground/10"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="https://ca.slack-edge.com/T088XHEFNV6-U088ZJX9PG8-8a3960b15785-512"
              alt="Infinite Code logo"
              width={28}
              height={28}
              className="rounded"
              priority
            />
            <span className="text-base sm:text-lg font-semibold tracking-tight">
              Infinite Code
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navItems.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname === item.href || pathname?.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`transition-colors hover:text-foreground ${
                    isActive ? "text-foreground" : "text-foreground/70"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </motion.header>
  );
}


