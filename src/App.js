import React from "react";
import HeaderPage from "./Componets.js/Headerpage";
import MainPage from "./Componets.js/MainPage";
import ContentPage from "./Componets.js/Content";
import SecondConetent from "./Componets.js/SecondConet";
import ReviewSection from "./Componets.js/ReviewSection";
import FaqSection from "./Componets.js/FaqSection";
import BrandSection from "./Componets.js/BreadSection";
import BlogSection from "./Componets.js/BlogSection";
import FooterSection from "./Componets.js/FooterSection";
function App() {
  return (
    <div>
      <HeaderPage/>
      <MainPage />
      <ContentPage/>
      <SecondConetent/>
      <ReviewSection/>
      <FaqSection/>
      <BrandSection/>
      <BlogSection/>
      <FooterSection/>
    </div>
  );
}

export default App;
