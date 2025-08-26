import React from "react";
import Navbar from "./assets/components/Navbar.jsx";
import { Banner } from "./assets/components/Banner.jsx";
import { Wcu } from "./assets/components/Wcu.jsx";
import { Mt } from "./assets/components/mt.jsx";
import { Princing } from "./assets/components/Princing.jsx";
import { YourOpinions } from "./assets/components/YourOpinions.jsx";
import { Contact } from "./assets/components/Contact.jsx";
import { Footer } from "./assets/components/Footer.jsx";

function App() {
  return (
    <>
      <Banner />
      <Navbar />
      <Wcu />
      <Mt />
      <Princing />
      <YourOpinions />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
