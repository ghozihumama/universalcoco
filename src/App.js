import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import FloatingWhatsApp from "react-floating-whatsapp";
import HomeView from "screens/HomeView";
import ProductDetailView from "screens/ProductDetailView";
import JourneyView from "screens/JourneyView";
import { LogoGreen } from "assets/images";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/journey" element={<JourneyView />} />
        <Route path="/product/:key" element={<ProductDetailView />} />
        <Route path="/" element={<HomeView />} />
        <Route path="*" element={<JourneyView />} />
      </Routes>
      <FloatingWhatsApp
        phoneNumber={"6289529283566"}
        accountName={"Universal Coco"}
        avatar={LogoGreen}
        statusMessage={"Supplying across the globe"}
        chatMessage={
          "Hello there, \nwelcome to Universal Coco Indonesia. \nHow can we help you ? 😀"
        }
      />
    </Router>
  );
}

export default App;
