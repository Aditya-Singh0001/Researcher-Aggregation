"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Search", href: "/search" },
  { label: "Account", href: "/account" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#1a1f36] border-b border-slate-700 px-6 py-4">
      <div className="flex items-center justify-between">
        <Link href="/" className="text-white font-bold text-lg tracking-tight">
          Academic Directory
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-slate-300 hover:text-white text-sm font-medium transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Hamburger button */}
        <button
          className="md:hidden text-white p-2 rounded-md hover:bg-slate-700 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-1 pt-4 pb-2 border-t border-slate-700 mt-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-slate-300 hover:text-white hover:bg-slate-700 text-sm font-medium transition-colors px-3 py-2 rounded-md"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}