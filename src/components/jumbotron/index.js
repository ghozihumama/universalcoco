import React from "react";
import { jumbotron1 } from "assets/images";
import Styles from "./styles.module.scss";

export const Jumbotron = (props) => {
  return (
    <div className={Styles.container}>
      <div
        className={Styles.jumbotron}
        style={{
          backgroundImage: `url(${props.image ? props.image : jumbotron1})`,
        }}
      >
        <h3>{props.h3}</h3>
        <h1 className={Styles.title}>{props.h1}</h1>
        {/* <button>Learn More</button> */}
      </div>
    </div>
  );
};
