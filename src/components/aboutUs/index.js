import React from "react";
import Styles from "./styles.module.scss";
import { ImgAboutUs } from "assets/images";

export const AboutUs = (props) => {
  const { innerRef } = props;
  return (
    <div className={Styles.container} ref={innerRef}>
      <section>
        <h2>About Us</h2>
        <span>
          Universal Coco Indonesia is the leading supplier of coconut products
          from Indonesia. We are a company engaged in manufacturing various
          coconut products with high-quality materials. We process more than
          1,500 hectares of coconut plantations, spread across several islands
          in Eastern Indonesia.
        </span>
        <p>
          In the beginning, our company was engaged in manufacturing where we
          processed coconut derivative products, namely coconut shells into
          coconut shell charcoal. And after that our company expanded and
          expanded into coconut plantations, to process more derivative
          products.
        </p>
        <p style={{ marginTop: 10 }}>
          Universal Coco Indonesia has served customers from all over the world
          and it has become our top priority to meet our customers’ satisfaction
          and expectations.
        </p>
      </section>
      <img src={ImgAboutUs} alt={"about us"} />
    </div>
  );
};
