import React from "react";
import Styles from "./styles.module.scss";
import {
  IconIntegrity,
  IconInnovation,
  IconCommitment,
  IconQuality,
} from "assets/icons";

const dataCard = [
  {
    Icon: IconIntegrity,
    title: "Integrity",
    desc: "Integrity means telling the truth, keeping our word, and treating others with fairness and respect. Integrity is one of our most cherished assets. It must not be compromised.",
  },
  {
    Icon: IconQuality,
    title: "Quality",
    desc: "Quality is exhibited in many ways by selling and supporting products and services that delight customers, establishing a work environment, and delivering financial results that meet investor expectations.",
  },
  {
    Icon: IconCommitment,
    title: "Commitment",
    desc: "Commitment is important where we will continue to provide the best to our customers and investors all the time. Our opportunity to serve should be viewed as a privilege that is not to be taken for granted.",
  },
  {
    Icon: IconInnovation,
    title: "Innovation",
    desc: "Innovation means inventing, designing, and developing products and services that have high appeal in the marketplace and strengthen customer preference for the Universal Coco Indonesia project.",
  },
];

const CardItem = (props) => {
  const { Icon, title, desc } = props;

  return (
    <div className={Styles.cardContainer}>
      <Icon />
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
};

export const KeyFeature = (props) => {
  const { innerRef } = props;
  return (
    <div className={Styles.container} ref={innerRef}>
      <h2>Our Key Features</h2>
      <div className={Styles.cardWrapper}>
        {dataCard.map((item, idx) => (
          <CardItem
            key={idx.toString()}
            Icon={item.Icon}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </div>
    </div>
  );
};
