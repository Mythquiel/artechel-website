import { useState } from "react";
import "./App.css";
import Gate from "./components/Gate/Gate";
import TopBar from "./components/Layout/TopBar";
import Footer from "./components/Layout/Footer";
import Hero from "./components/Hero/Hero";
import ShopSection from "./components/sections/ShopSection";
import InsuranceSection from "./components/sections/InsuranceSection";
import AboutSection from "./components/sections/AboutSection";
import ContactSection from "./components/sections/ContactSection";
import ReviewsSection from "./components/sections/ReviewsSection";
import {
  FIRMA,
  SKLEP,
  UBEZP,
  ENDPOINT_FORMULARZA,
  GOOGLE_LINK,
  OPINIE,
  REVIEW_WIDGET_ID,
} from "./config/company";

function SiteContent() {
  return (
    <div className="dw">
      <TopBar firma={FIRMA} />
      <div className="wrap">
        <Hero firma={FIRMA} />
      </div>
      <ShopSection sklep={SKLEP} />
      <InsuranceSection ubezpieczenia={UBEZP} />
      <AboutSection />
      <ContactSection firma={FIRMA} endpoint={ENDPOINT_FORMULARZA} />
      <ReviewsSection googleLink={GOOGLE_LINK} opinie={OPINIE} widgetId={REVIEW_WIDGET_ID} />
      <Footer firma={FIRMA} />
    </div>
  );
}

export default function App() {
  const [otwarte, setOtwarte] = useState(() => sessionStorage.getItem("artechel_ok") === "1");

  if (!otwarte) return <Gate onOpen={() => setOtwarte(true)} />;
  return <SiteContent />;
}
