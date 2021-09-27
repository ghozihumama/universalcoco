import React from "react";
import { jumbotron1 } from "assets/images";
import Styles from "./styles.module.scss";

export const Jumbotron = props => {
  return (
    <div className={Styles.container}>
      <div
        className={Styles.jumbotron}
        style={{ backgroundImage: `url(${jumbotron1})` }}
      >
        <h3>Supplying across the globe</h3>
        <h1 className={Styles.title}>
          The Leading Supplier <br /> of Coconut Product
        </h1>
        <button>Learn More</button>
      </div>
    </div>
  );
};
