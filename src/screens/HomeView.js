import React, { useState, useCallback, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { Jumbotron } from "components/jumbotron";
import { AboutUs } from "components/aboutUs";
import { KeyFeature } from "components/keyFeatures";
import { Product } from "components/product";
import { Team } from "components/personProfile";
import { Base } from "components/base";

function HomeView() {
  const [y, setY] = useState(window.scrollY);
  const setScrollState = useState("up")[1];
  const location = useLocation();
  const { hash } = location;

  const aboutRef = useRef(null);
  const featureRef = useRef(null);
  const productRef = useRef(null);
  const teamRef = useRef(null);

  const scrollToRef = (hashActive) => {
    switch (hashActive) {
      case "#about":
        aboutRef.current.scrollIntoView(true);
        break;
      case "#feature":
        featureRef.current.scrollIntoView(true);
        break;
      case "#product":
        productRef.current.scrollIntoView(true);
        break;
      case "#team":
        teamRef.current.scrollIntoView(true);
        break;
      default:
        break;
    }
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
    [y, setScrollState]
  );

  useEffect(() => {
    setY(window.scrollY);
    window.addEventListener("scroll", handleNavigation);

    return () => {
      window.removeEventListener("scroll", handleNavigation);
    };
  }, [handleNavigation]);

  useEffect(() => {
    if (hash) {
      scrollToRef(hash);
    }
  }, [hash]);

  return (
    <Base>
      <Jumbotron
        h3={"Supplying across the globe"}
        h1={"The Leading Supplier of Coconut Product"}
      />
      <AboutUs innerRef={aboutRef} />
      <KeyFeature innerRef={featureRef} />
      <Product innerRef={productRef} />
      <Team innerRef={teamRef} />
    </Base>
  );
}

export default HomeView;
