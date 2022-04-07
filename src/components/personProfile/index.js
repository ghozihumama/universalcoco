import React from "react";
import { ImgJulio, ImgHafis, ImgArya } from "assets/images";
import { IconInstagramGrey, IconLinkedInGrey } from "assets/icons";
import Styles from "./styles.module.scss";

const data = [
  {
    name: "Julio",
    position: "Founder",
    quotes:
      "Our faith is the substance of our future. There is no big success without big sacrifice.",
    linkedIn: "https://www.linkedin.com/in/julioio/",
    instagram: "https://www.instagram.com/julioioio/",
    image: ImgJulio,
  },
  {
    name: "Alhafis Wijaya",
    position: "Co-Founder",
    quotes:
      "Many of life’s failures are people who did not realize how close they were to success when they gave up.",
    linkedIn: "https://www.linkedin.com/in/alhafis-wijaya/",
    instagram: "https://www.instagram.com/alhafiswijaya/",
    image: ImgHafis,
  },
  {
    name: "Arya Pratama",
    position: "Business Development",
    quotes:
      "Many of life’s failures are people who did not realize how close they were to success when they gave up.",
    linkedIn: "https://www.linkedin.com/in/areyawn",
    instagram: "https://www.instagram.com/areyawn_/",
    image: ImgArya,
  },
];

const Person = (props) => {
  const { name, position, quotes, linkedIn, instagram, image } = props;

  return (
    <div className={Styles.itemContainer}>
      <img src={image} alt={name} />
      <span className={Styles.name}>{name}</span>
      <span className={Styles.position}>{position}</span>
      <p>{quotes}</p>
      <div>
        <a href={linkedIn} target={"_blank"} rel="noreferrer">
          <IconLinkedInGrey />
        </a>
        <a href={instagram} target={"_blank"} rel="noreferrer">
          <IconInstagramGrey />
        </a>
      </div>
    </div>
  );
};

export const Team = (props) => {
  const { innerRef } = props;
  return (
    <div className={Styles.container} ref={innerRef}>
      <h2>Our Teams</h2>
      <div>
        {data.map((item, idx) => (
          <Person
            name={item.name}
            position={item.position}
            quotes={item.quotes}
            linkedIn={item.linkedIn}
            instagram={item.instagram}
            image={item.image}
            key={idx.toString()}
          />
        ))}
      </div>
    </div>
  );
};
