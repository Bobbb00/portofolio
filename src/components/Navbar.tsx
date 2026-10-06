import React, { useState } from "react";
import { type Personal } from "../types/portfolio";
import { Button } from "./ui/button";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { mainNavLinks } from "../data/navigation";

interface NavbarProps {
  personal: Personal;
}

export const Navbar: React.FC<NavbarProps> = ({ personal }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navLinks = mainNavLinks;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/90 backdrop-blur-md border-b border-outline-variant/60">
      <div className="max-w-7xl mx-auto h-20 px-5 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand / Logo */}
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="w-9 h-9 bg-primary-container text-on-primary font-headline text-lg font-bold flex items-center justify-center shadow-brutal-sm hover:-translate-x-0.5 hover:-translate-y-0.5 transition-transform"
          >
            {personal.initials}
          </a>
          <a
            href="#"
            className="font-headline text-lg text-on-surface tracking-tight hover:text-primary transition-colors flex items-center gap-1.5"
          >
            <span>{personal.name}</span>
            <span className="w-2 h-2 rounded-full bg-primary-container inline-block"></span>
          </a>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-xs uppercase tracking-widest font-body font-semibold text-on-surface-variant hover:text-primary transition-colors py-1"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Action & Status Indicator */}
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-surface-container border border-outline-variant">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-container opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-container"></span>
            </span>
            <span className="text-[11px] font-mono uppercase tracking-wider text-on-surface-variant font-medium">
              Available for work
            </span>
          </div>

          <Button
            href="#contact"
            size="sm"
            variant="default"
            className="hidden sm:inline-flex"
          >
            <span>Contact</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-on-surface border border-outline-variant bg-surface-container"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-surface-container-low border-b border-outline-variant px-6 py-4 flex flex-col gap-3">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-xs uppercase tracking-widest font-body font-semibold text-on-surface hover:text-primary py-2 border-b border-outline-variant/40"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <Button
              href="#contact"
              size="sm"
              variant="default"
              className="w-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact Me
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
