import { useState } from "react";
import { Mail, Copy, Check, ExternalLink, MapPin } from "lucide-react";
import type { Personal, SocialLink, ContactConfig } from "../types/portfolio";
import { contactConfig as defaultContactConfig } from "../data/contact";
import { RevealOnScroll } from "./common/RevealOnScroll";

interface ContactSectionProps {
  personal: Personal;
  socials: SocialLink[];
  config?: ContactConfig;
}

export const ContactSection = ({
  personal,
  socials,
  config = defaultContactConfig,
}: ContactSectionProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(personal.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  return (
    <section
      id="contact"
      className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 lg:py-24 scroll-mt-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
        {/* Left: Statement & Location */}
        <div className="lg:col-span-6 flex flex-col justify-between">
          <RevealOnScroll delayMs={0}>
            <div>
              <div className="flex items-center gap-2 mb-3">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-xs uppercase tracking-widest font-bold text-primary">
                  {config.collaborationStatus}
                </span>
              </div>

              <h2 className="font-headline text-3xl md:text-4xl font-bold tracking-tight text-on-surface mb-4">
                Let's build something{" "}
                <span className="italic text-primary font-serif">exceptional</span>{" "}
                together.
              </h2>

              <p className="text-lg text-on-surface-variant max-w-lg leading-relaxed mb-8">
                {config.statement}
              </p>
            </div>

            {/* Location card */}
            <div className="p-4 bg-surface-container-lowest border border-outline-variant max-w-md shadow-sm transition-all duration-300 hover:border-outline">
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-4 h-4 text-secondary" />
                <span className="text-[11px] uppercase tracking-wider text-on-surface font-semibold">
                  {config.locationTitle}
                </span>
              </div>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                {config.locationDescription}
              </p>
            </div>
          </RevealOnScroll>
        </div>

        {/* Right: Contact & Network cards */}
        <div className="lg:col-span-6 flex flex-col gap-4">
          <RevealOnScroll delayMs={140}>
            {/* Email card */}
            <div className="bg-surface-container-lowest border border-outline-variant p-5 flex flex-col gap-3 shadow-[3px_3px_0px_#9a3412] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_#9a3412]">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase text-outline tracking-wider">
                  PRIMARY CONTACT
                </span>
                <span className="font-mono text-[10px] text-primary font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  SMTP ACTIVE
                </span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-6 h-6 text-primary shrink-0" />
                <span className="font-mono text-sm md:text-base font-bold text-on-surface break-all">
                  {personal.email}
                </span>
              </div>

              <div className="flex items-center gap-2 pt-3 border-t border-outline-variant">
                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-on-primary font-mono text-xs uppercase tracking-wider font-bold hover:bg-primary-container active:scale-[0.98] transition-all cursor-pointer shadow-brutal-sm"
                >
                  {copied ? (
                    <Check className="w-3.5 h-3.5 text-secondary-container" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                  {copied ? "Copied!" : "Click to Copy"}
                </button>
                <a
                  href={`mailto:${personal.email}`}
                  className="inline-flex items-center gap-1.5 px-4 py-2 bg-surface-container border border-outline-variant text-on-surface font-mono text-xs uppercase tracking-wider hover:bg-outline-variant hover:text-on-surface active:scale-[0.98] transition-all"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  Send Direct
                </a>
              </div>

              {copied && (
                <span className="text-xs text-primary font-mono font-bold animate-pulse">
                  ✓ Email copied to clipboard!
                </span>
              )}
            </div>

            {/* Social link cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              {socials.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-surface-container-lowest border border-outline-variant p-5 flex flex-col justify-between transition-all duration-300 hover:border-on-surface hover:shadow-[3px_3px_0px_#1e1b19] hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-[10px] uppercase text-outline tracking-wider">
                      {social.id === "github" ? "SOURCE CODE" : "PROFESSIONAL"}
                    </span>
                    <span className="font-mono text-sm text-outline group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
                      ↗
                    </span>
                  </div>
                  <div>
                    <p className="font-headline text-xl font-bold text-on-surface group-hover:text-primary transition-colors">
                      {social.label}
                    </p>
                    <p className="font-mono text-xs text-on-surface-variant mt-0.5">
                      {social.handle}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};
