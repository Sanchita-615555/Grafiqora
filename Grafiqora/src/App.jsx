



import React from "react";
import LandingPage from "./Components/LandingPage";
import BrandPage from "./Components/BrandPage";  // Add this line
import ServicesPage from "./Components/ServicesPage";
import ModelingReels from "./Components/ModelingReels";
import PromotionalPage from "./Components/PromotionalPage";
import WorkPage from "./Components/WorkPage";
import Unforgatable from "./Components/Unforgatable";
import PartnerPage from "./Components/PartnerPage";
import PackagePage from "./Components/PackagePage";
import ContactPage from "./Components/ContactPage";
function App() {
  return (
    <div>
      <LandingPage />
      <BrandPage />  {/* Add this line to render BrandPage */}
               <ServicesPage />
                <ModelingReels />
                 <PromotionalPage />
                   <WorkPage />
                   <Unforgatable/>
                   <PartnerPage/>
                   <PackagePage/>
                   <ContactPage/>
    </div>
  );
}

export default App;