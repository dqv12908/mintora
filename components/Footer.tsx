"use client";

import { Logomark } from "@/components/logos/MintoriaLogo";
import { useLanguage } from "@/providers/LanguageProvider";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-white/5 bg-bg-surface/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Col 1: Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Logomark size={32} variant="gradient" />
              <span className="text-lg font-heading font-bold text-white">
                Mintoria
              </span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed whitespace-pre-line">
              {t.footer.tagline}
            </p>
          </div>

          {/* Col 2: Resources */}
          <div>
            <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4">
              {t.footer.resources}
            </h4>
            <ul className="space-y-2">
              {t.footer.resourceLinks.map((link, index) => (
                <li key={link}>
                  <a
                    href={index === 0 ? "https://mintoria.gitbook.io/mintoria-docs/" : "#"}
                    target={index === 0 ? "_blank" : undefined}
                    rel={index === 0 ? "noopener noreferrer" : undefined}
                    className="text-sm text-slate-500 hover:text-neon-cyan transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-sm text-slate-500 hover:text-neon-cyan transition-colors">
                  Back to Homepage
                </a>
              </li>
              <li>
                <a href="#philosophy" className="text-sm text-slate-500 hover:text-neon-cyan transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#mechanisms" className="text-sm text-slate-500 hover:text-neon-cyan transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-500 hover:text-neon-cyan transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-500 hover:text-neon-cyan transition-colors">
                  Security Policies
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-slate-500 hover:text-neon-cyan transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Whitepaper */}
          <div>
            <a
              href="https://mintoria.gitbook.io/mintoria-docs/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-neon-cyan border border-neon-cyan/50 hover:bg-neon-cyan/10 transition-all duration-300"
            >
              {t.footer.whitepaper}
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/5 text-center">
          <p className="text-xs text-slate-600" suppressHydrationWarning>
            &copy; {new Date().getFullYear()} {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
