import React from "react";
import { Jumbotron } from "components/jumbotron";
import { Base } from "components/base";
import { BannerJourney } from "assets/images";
import {
  Ilustration2015,
  Ilustration2016,
  Ilustration2017,
  Ilustration2018,
  Ilustration2020,
} from "assets/icons";
import styles from "./JourneyView.module.scss";

const journeyFlows = [
  {
    key: 2015,
    title: "Universal Coco was founded",
    desc: "Universal Coco Indonesia was first established in 2015 by our CEO Julio Ekspor. Our first project was producing coconut shell charcoal. We produced in West Java and supplied it to local restaurant in Jakarta, Bandung and Tangerang.",
    ilustration: Ilustration2015,
    image: null,
  },
  {
    key: 2016,
    title: "Expand 1.500 Ha in Eastern Java",
    desc: "After learning the market for several years, Universal Coco Indonesia is collaborating with farmers from Eastern Java to produce more coconut products such as charcoal, copra and coconut fibre.",
    ilustration: Ilustration2016,
    image: null,
  },
  {
    key: 2017,
    title: "Build end to end ecosystem for coconut products",
    desc: "Universal Coco Indonesia charcoal briquette close its first container export project to Paraguay, followed by several Europe and Middle East market.",
    ilustration: Ilustration2017,
    image: null,
  },
  {
    key: 2018,
    title: "Expanding our export capacities",
    desc: "After receiving many positive feedbacks from the customer, Universal Coco Indonesia increasingly expanding our market to more than 15 countries.",
    ilustration: Ilustration2018,
    image: null,
  },
  {
    key: 2020,
    title: "Deliver more derivative coconut products",
    desc: "After the success of coconut charcoal briquette, we innovated our products and expanded to process more coconut derivatives products, namely coconut oil, coconut sugar and desiccated coconut.",
    ilustration: Ilustration2020,
    image: null,
  },
];

function JourneyView() {
  return (
    <Base>
      <Jumbotron
        image={BannerJourney}
        h3={"The journey to becoming"}
        h1={"The Leading Indonesian Coconut Products Supplier"}
      />
      <div className={styles.containerContent}>
        <span>Our Journey</span>
        {journeyFlows.map((item, idx) => (
          <div
            key={idx.toString()}
            className={
              idx % 2 === 0
                ? styles.journeyWrapperLeft
                : styles.journeyWrapperRight
            }
          >
            <item.ilustration />
            <div>
              <span>{item.key}</span>
              <h5>{item.title}</h5>
              <p>{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Base>
  );
}

export default JourneyView;
