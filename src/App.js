import React, { useState, useCallback, useEffect, useRef } from "react";
import FloatingWhatsApp from "react-floating-whatsapp";
import Styles from "./App.module.scss";
import { NavigationTop } from "components/navbar/index";
import { Jumbotron } from "components/jumbotron";
import { AboutUs } from "components/aboutUs";
import { KeyFeature } from "components/keyFeatures";
import { Product } from "components/product";
import { Team } from "components/personProfile";
import { Footer } from "components/footer";
import { LogoGreen } from "assets/images";

function App() {
  const [y, setY] = useState(window.scrollY);
  const [scrollState, setScrollState] = useState("up");

  const aboutRef = useRef(null);
  const journeyRef = useRef(null);
  const featureRef = useRef(null);
  const productRef = useRef(null);
  const teamRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToRef = (ref) => {
    ref.current.scrollIntoView(true);
  };

  const handleNavigation = useCallback(
    (e) => {
      const window = e.currentTarget;
      if (y > window.scrollY) {
        setScrollState("up");
      } else if (y < window.scrollY) {
        setScrollState("down");
      }
      setY(window.scrollY);
    },
    [y]
  );

  useEffect(() => {
    console.log(window.scrollY);
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  return (
    <div className={Styles.container}>
      <NavigationTop
        scrollState={scrollState}
        positionY={y}
        onNavigate={(ref) => scrollToRef(ref)}
        refs={{
          aboutRef: aboutRef,
          journeyRef: journeyRef,
          featureRef: featureRef,
          productRef: productRef,
          teamRef: teamRef,
          contactRef: contactRef,
        }}
      />
      <Jumbotron />
      <AboutUs innerRef={aboutRef} />
      <KeyFeature innerRef={featureRef} />
      <Product innerRef={productRef} />
      <Team innerRef={teamRef} />
      <Footer innerRef={contactRef} />
      <FloatingWhatsApp
        phoneNumber={"6289529283566"}
        accountName={"Universal Coco"}
        avatar={LogoGreen}
        statusMessage={"Supplying across the globe"}
      />
    </div>
  );
}

export default App;
