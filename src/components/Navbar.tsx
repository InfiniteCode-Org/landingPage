"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useCallback } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const closeMenu = useCallback(() => setOpen(false), []);

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
          <button
            type="button"
            aria-label="Toggle menu"
            className="md:hidden inline-flex items-center justify-center rounded-md border border-foreground/10 bg-background/80 p-2 text-sm hover:bg-background/95"
            onClick={() => setOpen((v) => !v)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path d="M3.75 6.75h16.5a.75.75 0 0 0 0-1.5H3.75a.75.75 0 0 0 0 1.5Zm16.5 4.5H3.75a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5Zm0 6H3.75a.75.75 0 0 0 0 1.5h16.5a.75.75 0 0 0 0-1.5Z" />
            </svg>
          </button>
        </div>
      </div>
      {open && (
        <>
          <button
            aria-label="Close menu"
            className="fixed inset-0 z-40 bg-black/20"
            onClick={closeMenu}
          />
          <motion.nav
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 inset-x-0 z-50"
          >
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
              <div className="rounded-xl border border-foreground/10 bg-background/95 p-4 shadow-lg">
                <div className="flex flex-col gap-2 text-sm">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={closeMenu}
                      className="rounded-md px-2 py-2 text-foreground/80 hover:text-foreground hover:bg-foreground/5"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.nav>
        </>
      )}
    </motion.header>
  );
}


