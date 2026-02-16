import { Logomark } from "@/components/logos/MintoriaLogo";

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-bg-surface/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Col 1: Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Logomark size={32} variant="gradient" />
              <span className="text-lg font-heading font-bold text-white">
                Mintoria
              </span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed">
              Protocol Driven Issuance.
              <br />
              Built on trust in mathematics, not promises.
            </p>
          </div>

          {/* Col 2: Resources */}
          <div>
            <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4">
              Resources
            </h4>
            <ul className="space-y-2">
              {["Whitepaper", "GitHub", "Audit Reports", "Documentation"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-slate-500 hover:text-neon-cyan transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Col 3: Community */}
          <div>
            <h4 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4">
              Community
            </h4>
            <ul className="space-y-2">
              {["Twitter / X", "Discord", "Telegram", "Medium"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-slate-500 hover:text-neon-cyan transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-white/5 text-center">
          <p className="text-xs text-slate-600">
            &copy; {new Date().getFullYear()} Mintoria Protocol. All rights
            reserved. Built on decentralized principles.
          </p>
        </div>
      </div>
    </footer>
  );
}
