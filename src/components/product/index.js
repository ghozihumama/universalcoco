import React, { useState } from "react";
import Styles from "./styles.module.scss";
import { IconNext, IconPrev, IconWhatsApp } from "assets/icons";
import {
  ThumbnailCopra,
  ThumbnailCoconutBriquetteCharcoal,
  ThumbnailCoconutOil,
  ThumbnailCoconutFiber,
  ThumbnailCopraMeal,
  ThumbnailCoconutPeatBlocks,
  ThumbnailDesiccatedCoconut,
  ThumbnailVirginCoconutOil,
} from "assets/images";

const data = [
  {
    name: "copra",
    desc: "Copra is the dried flesh of coconuts. Every adult coconut tree bears 50-75 nuts that can be harvested, split with machetes and left to dry in the sun. The copra is then scraped out of the husk and gets to dry further on racks. Finally, it is packed in jute bags and transported to a processing facility.",
    subDesc:
      "Indonesia is the largest coconut grower in the world and is continually harvested throughout the year and our copra has the best quality and has gone through several stages of selection.",
    thumbnail: ThumbnailCopra,
    isVisible: true,
  },
  {
    name: "Charcoal Briquette",
    desc: "Coconut Charcoal Briquette is compact block charcoal that is made from coconut shell charcoal. Our charcoal briquette is made of granular coconut shell charcoal that is crushed charcoal and molded using a natural binder. As a fuel, it is hotter and lasts longer than ordinary charcoal.",
    subDesc:
      "Universal Coco charcoal briquette manufacturer is located in East Java, Indonesia. We only produce charcoal briquette from the best quality local coconut shells and wood without adding any harmful chemicals. It is suitable for household use both indoors and outdoors. Also, it can be used in food industries, for barbecue, stove fuel, metallurgy, etc.",
    thumbnail: ThumbnailCoconutBriquetteCharcoal,
    isVisible: true,
  },
  {
    name: "RBD Coconut Oil",
    desc: "RBD Coconut Oil is a light yellow liquid and would change into a semi-solid at room temperature. For Crude Coconut Oil to be suitable for consumption, it must be refined, bleached, and deodorized (RBD). RBD Coconut Oil is used in coconut-based cooking oil, for food processing commercial, and in oleochemical industries.",
    subDesc:
      "Our manufacturer in Central Java is equipped with German engineering, the process of our cooking oil starts with the selection of raw materials. Raw materials are processed through stages called Degumming, Bleaching, Deodorization, and Fractionation. All these processes are strictly supervised by professionals. RHCNO (Hydrogenated Coconut Oil) is also available.",
    thumbnail: ThumbnailCoconutOil,
    isVisible: true,
  },
  {
    name: "Coconut Fiber",
    desc: "Coconut fiber, is a natural fiber extracted from the husk of coconut[1] and used in products such as floor mats, doormats, brushes and mattresses. Coir is the fibrous material found between the hard, internal shell and the outer coat of a coconut. Other uses of brown coir (made from ripe coconut) are in upholstery padding, sacking and horticulture. White coir, harvested from unripe coconuts, is used for making finer brushes, string, rope and fishing net",
    thumbnail: ThumbnailCoconutFiber,
    isVisible: false,
  },
  {
    name: "Copra Meal",
    desc: "Coconut meal or copra meal is produced from the ripe fruit (nut) of the coconut palm (Cocos nucifera). The nut is split and the kernel is removed and dried below 6% moisture. This meal is called copra meal and still contains the oil.",
    thumbnail: ThumbnailCopraMeal,
    isVisible: false,
  },
  {
    name: "Coconut Peat Blocks",
    desc: "Cocopeat blocks are considered an ideal growing medium. The cocopeat powder thus obtained is sieved, washed, dried and finally compressed into blocks. The blocks can be used for a wide range of planting requirements. Coir is known for its natural rooting hormones and anti-fungal properties. We also ensure secure packaging of the cocopeat blocks.",
    thumbnail: ThumbnailCoconutPeatBlocks,
    isVisible: false,
  },
  {
    name: "Desiccated Coconut",
    desc: "Desiccated coconut is coconut flesh that is dried, mashed, and processed under hygienic conditions for human consumption. Desiccated Coconuts are graded by their cutting size, for example, fine grade and medium grade where fine grade is smaller particle size than the medium grade. Desiccated Coconut is rich in fat content ranging from 40 to 65%. Desiccated Coconut is usually used as an ingredient in processed foods such as bread, cakes, confectionery, etc.",
    subDesc:
      "Universal Coco production base is located in West Java, Indonesia. We managed to produce 100-500 MT/ Month. Our product is backed by a dedicated team of professionals, we offer the best quality products to the clients at highly competitive prices",
    thumbnail: ThumbnailDesiccatedCoconut,
    isVisible: true,
  },
  {
    name: "Virgin Coconut Oil",
    desc: "Virgin coconut oil is the oil extracted from coconuts without the application of heat. It is rapidly gaining popularity throughout the world in comparison to ordinary coconut oil and for a good reason. There is, in fact, a substance called virgin coconut oil and it differs from regular coconut oil in significant ways. These differences mainly lie with the source (more specifically, the physical form of the source), the method of extraction, and its subsequent benefits.",
    subDesc:
      "Universal Coco VCO manufacturer is located in Central Java, Indonesia. We are able to produce virgin coconut oil as much as 100-300 MT/Month with the best quality and also a hygienic production process that is noticed by experts",
    thumbnail: ThumbnailVirginCoconutOil,
    isVisible: true,
  },
].filter((item) => item.isVisible === true);

export const Product = (props) => {
  const [index, setIndex] = useState(0);
  const { innerRef } = props;

  const handleNext = () => {
    const length = data.length;
    if (index === length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  const handlePrev = () => {
    const length = data.length;
    if (index === 0) {
      setIndex(length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const renderMainContent = () => {
    return (
      <main>
        <div className={Styles.infoContainer}>
          <section>
            <h2>Our Product</h2>
            <h3>{data[index].name}</h3>
            <p>{data[index].desc}</p>
            <p>{data[index].subDesc}</p>
            <div>
              <button>
                <span>See Details</span>
              </button>
              <a
                href={"https://wa.link/upjns7"}
                target={"_blank"}
                rel="noreferrer"
              >
                <span>Contact Us</span>
                <IconWhatsApp />
              </a>
            </div>
          </section>
          <img src={data[index].thumbnail} alt={"thumbnail"} />
        </div>
        <div className={Styles.indicatorContainer}>
          <div>{/* Indicator */}</div>
        </div>
      </main>
    );
  };

  return (
    <div className={Styles.container} ref={innerRef}>
      <IconPrev onClick={() => handlePrev()} />
      {renderMainContent()}
      <IconNext onClick={() => handleNext()} />
    </div>
  );
};
