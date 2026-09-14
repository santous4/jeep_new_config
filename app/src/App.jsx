import { useEffect, useState } from "react";
import { useConfigurator } from "./state/useConfigurator";
import { Header } from "./components/Header";
import { ResumeBar, StockBar } from "./components/Bars";
import { StepNav } from "./components/StepNav";
import { Visualizer } from "./components/Visualizer";
import { OptionPanel } from "./components/OptionPanel";
import { StickyBar } from "./components/StickyBar";
import { AssistFab } from "./components/AssistFab";
import { ConflictModal, ExitIntentModal } from "./components/Modals";
import { Drawer } from "./components/Drawer";
import { Footer } from "./design-system/Footer";
import logoJeep from "./assets/jeep/logo-jeep-white.png";
import logoAlFuttaim from "./assets/jeep/logo-alfuttaim-te.png";

export default function App({ startStep = "color", defaultMode = "finance", showMostChosen = true } = {}) {
  const vm = useConfigurator({ startStep, defaultMode, showMostChosen });
  const [stickyHeight, setStickyHeight] = useState(0);

  useEffect(() => {
    const el = document.getElementById("om-sticky-bar");
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => setStickyHeight(entry.contentRect.height));
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ minHeight: "100vh", background: "#ffffff", paddingBottom: stickyHeight }}>
      <Header vm={vm} />
      <ResumeBar vm={vm} />
      <StockBar vm={vm} />
      <StepNav vm={vm} />

      <main style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,400px),1fr))", gap: 0, alignItems: "start" }}>
        <Visualizer vm={vm} />
        <OptionPanel vm={vm} />
      </main>

      <StickyBar vm={vm} />
      <AssistFab vm={vm} />
      <ConflictModal vm={vm} />
      <ExitIntentModal vm={vm} />
      <Drawer vm={vm} />

      <Footer logos={[logoJeep, logoAlFuttaim]} legal={["Privacy policy", "Terms of use", "Cookie settings"]} copyright="© Al-Futtaim 2026. All rights reserved" />
    </div>
  );
}
