import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Introduction from "@/components/Introduction";
import Mechanism from "@/components/Mechanism";
import Tokenomics from "@/components/Tokenomics";
import InvestmentValue from "@/components/InvestmentValue";
import DataDashboard from "@/components/DataDashboard";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <SectionDivider variant="gradient-line" />
        <Introduction />
        <SectionDivider variant="geometric" />
        <Mechanism />
        <SectionDivider variant="gradient-line" />
        <Tokenomics />
        <SectionDivider variant="geometric" />
        <InvestmentValue />
        <SectionDivider variant="gradient-line" />
        <DataDashboard />
      </main>
      <Footer />
    </>
  );
}
