import {
  Logomark,
  Wordmark,
  LogoHorizontal,
  LogoStacked,
} from "@/components/logos/MintoriaLogo";

function Section({
  title,
  bg,
  children,
}: {
  title: string;
  bg: "dark" | "light";
  children: React.ReactNode;
}) {
  return (
    <div className="mb-2">
      <h2 className="text-sm font-mono uppercase tracking-widest text-slate-500 mb-4 px-1">
        {title}
      </h2>
      <div
        className={`p-12 md:p-16 flex flex-wrap items-center justify-center gap-16 ${
          bg === "dark" ? "bg-[#0a0a0f]" : "bg-white"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return (
    <span className="block text-[10px] font-mono uppercase tracking-wider text-slate-500 mt-3 text-center">
      {children}
    </span>
  );
}

export default function LogoPage() {
  return (
    <div className="min-h-screen bg-[#18181b] text-white font-sans p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tight mb-1">
          Mintoria Logo System
        </h1>
        <p className="text-slate-500 text-sm mb-10 font-mono">
          Right-click → Save Image / Screenshot to export. All SVGs render at
          exact pixel sizes below.
        </p>

        {/* ============================================================ */}
        {/*  1. LOGOMARK , all variants, dark bg                        */}
        {/* ============================================================ */}
        <Section title="Logomark , Dark Background" bg="dark">
          <div className="flex flex-col items-center">
            <Logomark size={200} variant="gradient" />
            <Label>Gradient , Primary</Label>
          </div>
          <div className="flex flex-col items-center">
            <Logomark size={200} variant="cyan" />
            <Label>Cyan , Mono</Label>
          </div>
          <div className="flex flex-col items-center">
            <Logomark size={200} variant="white" />
            <Label>White , Mono</Label>
          </div>
        </Section>

        {/* Logomark , light bg */}
        <Section title="Logomark , Light Background" bg="light">
          <div className="flex flex-col items-center">
            <Logomark size={200} variant="dark" />
            <Label>Dark , on White</Label>
          </div>
          <div className="flex flex-col items-center">
            <Logomark size={200} variant="gradient" />
            <Label>Gradient , on White</Label>
          </div>
        </Section>

        {/* ============================================================ */}
        {/*  2. LOGOMARK , small sizes for reference                     */}
        {/* ============================================================ */}
        <Section title="Logomark , Size Reference" bg="dark">
          <div className="flex flex-col items-center">
            <Logomark size={16} variant="cyan" />
            <Label>16px</Label>
          </div>
          <div className="flex flex-col items-center">
            <Logomark size={32} variant="cyan" />
            <Label>32px</Label>
          </div>
          <div className="flex flex-col items-center">
            <Logomark size={48} variant="gradient" />
            <Label>48px</Label>
          </div>
          <div className="flex flex-col items-center">
            <Logomark size={64} variant="gradient" />
            <Label>64px</Label>
          </div>
          <div className="flex flex-col items-center">
            <Logomark size={128} variant="gradient" />
            <Label>128px</Label>
          </div>
        </Section>

        {/* ============================================================ */}
        {/*  3. WORDMARK                                                 */}
        {/* ============================================================ */}
        <Section title="Wordmark , Dark Background" bg="dark">
          <div className="flex flex-col items-center">
            <Wordmark height={60} variant="white" />
            <Label>White</Label>
          </div>
          <div className="flex flex-col items-center">
            <Wordmark height={60} variant="cyan" />
            <Label>Cyan</Label>
          </div>
          <div className="flex flex-col items-center">
            <Wordmark height={60} variant="gradient" />
            <Label>Gradient</Label>
          </div>
        </Section>

        <Section title="Wordmark , Light Background" bg="light">
          <div className="flex flex-col items-center">
            <Wordmark height={60} variant="dark" />
            <Label>Dark , on White</Label>
          </div>
        </Section>

        {/* ============================================================ */}
        {/*  4. HORIZONTAL LOCKUP                                        */}
        {/* ============================================================ */}
        <Section title="Horizontal Lockup , Dark Background" bg="dark">
          <div className="flex flex-col items-center">
            <LogoHorizontal height={80} variant="gradient" />
            <Label>Gradient mark + White text</Label>
          </div>
        </Section>
        <Section title="Horizontal Lockup , Large" bg="dark">
          <div className="flex flex-col items-center">
            <LogoHorizontal height={120} variant="gradient" />
            <Label>120px height</Label>
          </div>
        </Section>
        <Section title="Horizontal Lockup , Mono variants" bg="dark">
          <div className="flex flex-col items-center">
            <LogoHorizontal height={72} variant="cyan" />
            <Label>Cyan mono</Label>
          </div>
          <div className="flex flex-col items-center">
            <LogoHorizontal height={72} variant="white" />
            <Label>White mono</Label>
          </div>
        </Section>
        <Section title="Horizontal Lockup , Light Background" bg="light">
          <div className="flex flex-col items-center">
            <LogoHorizontal height={80} variant="dark" />
            <Label>Dark , on White</Label>
          </div>
          <div className="flex flex-col items-center">
            <LogoHorizontal height={80} variant="gradient" />
            <Label>Gradient , on White</Label>
          </div>
        </Section>

        {/* ============================================================ */}
        {/*  5. STACKED LOCKUP                                           */}
        {/* ============================================================ */}
        <Section title="Stacked Lockup , Dark Background" bg="dark">
          <div className="flex flex-col items-center">
            <LogoStacked markSize={140} variant="gradient" />
            <Label>Gradient , Primary</Label>
          </div>
          <div className="flex flex-col items-center">
            <LogoStacked markSize={140} variant="cyan" />
            <Label>Cyan mono</Label>
          </div>
          <div className="flex flex-col items-center">
            <LogoStacked markSize={140} variant="white" />
            <Label>White mono</Label>
          </div>
        </Section>
        <Section title="Stacked Lockup , Light Background" bg="light">
          <div className="flex flex-col items-center">
            <LogoStacked markSize={140} variant="dark" />
            <Label>Dark , on White</Label>
          </div>
        </Section>

        {/* ============================================================ */}
        {/*  6. EXTRA-LARGE , for high-res export                        */}
        {/* ============================================================ */}
        <Section title="Extra-Large Export , Logomark 512px" bg="dark">
          <Logomark size={512} variant="gradient" />
        </Section>
        <Section title="Extra-Large Export , Logomark 512px on White" bg="light">
          <Logomark size={512} variant="dark" />
        </Section>
        <Section title="Extra-Large Export , Horizontal Lockup" bg="dark">
          <LogoHorizontal height={160} variant="gradient" />
        </Section>
        <Section title="Extra-Large Export , Stacked Lockup" bg="dark">
          <LogoStacked markSize={200} variant="gradient" />
        </Section>
      </div>
    </div>
  );
}
