import About from "./components/Abount";
import Footer from "./components/Footer";
import Home from "./components/Home";
import HowToBuySection from "./components/HowToBuySection";
import Info from "./components/Info";
import MeetTeam from "./components/MeetTeam";
import Roadmap from "./components/Roadmap";
import TokenInfo from "./components/TokenInfo";
import Tokenomics from "./components/Tokenomics";
import WalletConnection from "./components/WalletConnection"
import { LanguageSwitcher } from "../src/components/LanguageSwitcher";
import Faqs from "./components/Faqs";

const App = () => {
  return (
    <div className="max-w-full h-full overflow-hidden bg-gradient-to-r from-[rgba(109,235,151,0.15)] via-[rgba(109,235,151,0.35)] to-[rgba(109,235,151,0.45)]">
      <div className="fixed z-50 top-1/4 right-0">
        <LanguageSwitcher />

      </div>

      <Home />
      <WalletConnection />
      <Faqs />
      <About />
      <Info />
      <Tokenomics />
      <TokenInfo />
      <Roadmap />
      <MeetTeam />
      <HowToBuySection />
      <Footer />
    </div>
  );
};

export default App;
