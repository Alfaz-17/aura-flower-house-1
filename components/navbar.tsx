"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ShoppingBag, Menu, X, Search } from "lucide-react"
import { cn } from "@/lib/utils"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Collections", href: "/collections" },
    { name: "Signature Pieces", href: "/signature" },
    { name: "Wedding & Ceremonial", href: "/wedding" },
    { name: "About Aura", href: "/about" },
  ]

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-in-out px-6 md:px-12 py-6",
        isScrolled ? "bg-background/80 backdrop-blur-md py-4 border-b" : "bg-transparent",
      )}
    >
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
        {/* Mobile Menu Toggle */}
        <button className="md:hidden p-2 -ml-2" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Desktop Left Nav */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          {navLinks.slice(0, 2).map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[10px] uppercase tracking-[0.25em] font-light text-muted-foreground hover:text-foreground transition-all duration-300 relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Logo */}
        <Link href="/" className="flex flex-col items-center group px-8">
          <span className="font-serif text-3xl md:text-5xl tracking-tight leading-none italic">Aura</span>
          <span className="text-[10px] uppercase tracking-[0.5em] mt-2 font-semibold">House of Flowers</span>
        </Link>

        {/* Desktop Right Nav */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          {navLinks.slice(2).map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-[10px] uppercase tracking-[0.25em] font-light text-muted-foreground hover:text-foreground transition-all duration-300 relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-foreground transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4 md:gap-6">
          <button className="p-2 -mr-2 hover:text-primary transition-colors hidden sm:block">
            <Search size={18} strokeWidth={1.5} />
          </button>
          <button className="p-2 -mr-2 relative hover:text-primary transition-colors">
            <ShoppingBag size={18} strokeWidth={1.5} />
            <span className="absolute top-1 right-1 text-[8px] bg-primary text-primary-foreground w-3.5 h-3.5 flex items-center justify-center rounded-full">
              0
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-background z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden",
          isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none",
        )}
      >
        {navLinks.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            onClick={() => setIsMenuOpen(false)}
            className="text-xl font-serif hover:text-primary transition-colors"
          >
            {link.name}
          </Link>
        ))}
        <Link
          href="/contact"
          onClick={() => setIsMenuOpen(false)}
          className="mt-4 px-8 py-3 border border-foreground text-[11px] uppercase tracking-[0.2em]"
        >
          Contact Us
        </Link>
      </div>
    </nav>
  )
}
