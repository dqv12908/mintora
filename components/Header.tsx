"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { Logomark } from "@/components/logos/MintoriaLogo";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Philosophy", href: "#philosophy" },
  { label: "Mechanisms", href: "#mechanisms" },
  { label: "Tokenomics", href: "#tokenomics" },
  { label: "Dashboard", href: "#dashboard" },
];

const languages = [
  { name: "English",   code: "en",    short: "EN" },
  { name: "Deutsch",   code: "de",    short: "DE" },
  { name: "español",   code: "es",    short: "ES" },
  { name: "Français",  code: "fr",    short: "FR" },
  { name: "Italiano",  code: "it",    short: "IT" },
  { name: "日本語",    code: "ja",    short: "JP" },
  { name: "한국인",    code: "ko",    short: "KO" },
  { name: "Portugal",  code: "pt",    short: "PT" },
  { name: "Tiếng Việt",code: "vi",    short: "VI" },
  { name: "繁体中文",  code: "zh-TW", short: "繁" },
  { name: "简体中文",  code: "zh-CN", short: "简" },
  { name: "Ελληνικά", code: "el",    short: "EL" },
  { name: "ไทย",      code: "th",    short: "TH" },
  { name: "Русский",   code: "ru",    short: "RU" },
];

type Language = (typeof languages)[number];

function LanguageSelector({ onSelect }: { onSelect?: () => void }) {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState<Language>(languages[0]);
  const containerRef = useRef<HTMLDivElement>(null);

  // Restore displayed language from googtrans cookie on mount
  useEffect(() => {
    const match = document.cookie.match(/googtrans=\/en\/([^;]+)/);
    if (match) {
      const code = decodeURIComponent(match[1]);
      const found = languages.find((l) => l.code === code);
      if (found) setCurrent(found);
    }
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const triggerGoogleTranslate = (code: string) => {
    const select = document.querySelector<HTMLSelectElement>(".goog-te-combo");
    if (select) {
      select.value = code;
      // bubbles:true is required — GT listens at document level
      select.dispatchEvent(new Event("change", { bubbles: true }));
      return true;
    }
    return false;
  };

  const changeLanguage = (lang: Language) => {
    setCurrent(lang);
    setOpen(false);
    onSelect?.();

    if (lang.code === "en") {
      // Reload to fully restore original English content
      document.cookie = "googtrans=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT";
      document.cookie = `googtrans=; domain=.${window.location.hostname}; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT`;
      window.location.reload();
      return;
    }

    // Try immediately; if GT widget isn't initialised yet, retry after 500 ms
    if (!triggerGoogleTranslate(lang.code)) {
      setTimeout(() => triggerGoogleTranslate(lang.code), 500);
    }
  };

  return (
    <div ref={containerRef} className="relative">
      {/* Trigger button */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Select language"
        aria-expanded={open}
        className="flex items-center gap-1.5 px-3 py-1.5 text-sm text-slate-400 hover:text-neon-cyan border border-white/10 hover:border-neon-cyan/40 transition-all duration-200"
      >
        {/* Globe icon */}
        <svg
          className="w-4 h-4 shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
          />
        </svg>

        <span className="font-mono text-xs tracking-wider">{current.short}</span>

        {/* Chevron */}
        <svg
          className={`w-3 h-3 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6, scaleY: 0.94 }}
            animate={{ opacity: 1, y: 0, scaleY: 1 }}
            exit={{ opacity: 0, y: -6, scaleY: 0.94 }}
            transition={{ duration: 0.14, ease: "easeOut" }}
            style={{ transformOrigin: "top" }}
            className="absolute right-0 top-full mt-2 w-44 bg-bg-primary/98 backdrop-blur-lg border border-white/10 shadow-2xl z-[60]"
          >
            <div className="max-h-64 overflow-y-auto lang-scroll py-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang)}
                  className={`w-full text-left px-4 py-2.5 text-sm transition-colors duration-100 flex items-center justify-between ${
                    current.code === lang.code
                      ? "text-neon-cyan bg-neon-cyan/5"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  <span>{lang.name}</span>
                  {current.code === lang.code && (
                    <svg
                      className="w-3.5 h-3.5 text-neon-cyan shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-bg-primary/90 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      {/* Scroll progress bar */}
      <motion.div
        className="absolute top-0 left-0 h-[2px] bg-neon-cyan"
        style={{ width: progressWidth }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="group-hover:glow-cyan transition-all duration-300">
              <Logomark size={32} variant="gradient" />
            </div>
            <span className="text-xl font-heading font-bold text-white glow-text-cyan">
              Mintoria
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-slate-400 hover:text-neon-cyan transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right side: Language + CTA + Hamburger */}
          <div className="flex items-center gap-3">
            {/* Language selector — desktop */}
            <div className="hidden md:block">
              <LanguageSelector />
            </div>

            <a
              href="#"
              className="hidden md:inline-flex items-center px-5 py-2 text-sm font-medium text-neon-cyan border border-neon-cyan/50 hover:bg-neon-cyan/10 hover:glow-cyan transition-all duration-300"
            >
              Launch App
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex flex-col gap-1.5 p-2"
              aria-label="Toggle menu"
            >
              <span
                className={`w-6 h-0.5 bg-slate-300 transition-all duration-300 ${
                  mobileOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-slate-300 transition-all duration-300 ${
                  mobileOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`w-6 h-0.5 bg-slate-300 transition-all duration-300 ${
                  mobileOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-bg-primary/95 backdrop-blur-md border-b border-white/5"
          >
            <nav className="flex flex-col px-4 py-4 gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm text-slate-400 hover:text-neon-cyan py-2 transition-colors"
                >
                  {link.label}
                </a>
              ))}

              {/* Language selector — mobile */}
              <div className="pt-2 pb-1 border-t border-white/5">
                <LanguageSelector onSelect={() => setMobileOpen(false)} />
              </div>

              <a
                href="#"
                className="inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-neon-cyan border border-neon-cyan/50 hover:bg-neon-cyan/10 transition-all"
              >
                Launch App
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
