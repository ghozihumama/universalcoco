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
    thumbnail: ThumbnailCopra,
  },
  {
    name: "Coconut Briquette Charcoal",
    desc: "Coconut Charcoal Briquette is a compact block charcoal which made from coconut shell charcoal. Our charcoal briquette is made of granular coconut shell charcoal that is crushed charcoal and moulded using a natural binder. As fuel, it is hotter and last longer than ordinary charcoal. It is suitable for household use both indoor and outdoor. Also, it can be used in food industries, for barbecue, stove fuel, metallurgy, etc.",
    thumbnail: ThumbnailCoconutBriquetteCharcoal,
  },
  {
    name: "Coconut Oil",
    desc: "Coconut oil, or copra oil, is an edible oil extracted from the kernel or meat of mature coconuts harvested from the coconut palm (Cocos nucifera). It has various applications. Because of its high saturated fat content, it is slow to oxidize and, thus, resistant to rancidification, lasting up to six months at 24 °C (75 °F) without spoiling.",
    thumbnail: ThumbnailCoconutOil,
  },
  {
    name: "Coconut Fiber",
    desc: "Coconut fiber, is a natural fiber extracted from the husk of coconut[1] and used in products such as floor mats, doormats, brushes and mattresses. Coir is the fibrous material found between the hard, internal shell and the outer coat of a coconut. Other uses of brown coir (made from ripe coconut) are in upholstery padding, sacking and horticulture. White coir, harvested from unripe coconuts, is used for making finer brushes, string, rope and fishing net",
    thumbnail: ThumbnailCoconutFiber,
  },
  {
    name: "Copra Meal",
    desc: "Coconut meal or copra meal is produced from the ripe fruit (nut) of the coconut palm (Cocos nucifera). The nut is split and the kernel is removed and dried below 6% moisture. This meal is called copra meal and still contains the oil.",
    thumbnail: ThumbnailCopraMeal,
  },
  {
    name: "Coconut Peat Blocks",
    desc: "Cocopeat blocks are considered an ideal growing medium. The cocopeat powder thus obtained is sieved, washed, dried and finally compressed into blocks. The blocks can be used for a wide range of planting requirements. Coir is known for its natural rooting hormones and anti-fungal properties. We also ensure secure packaging of the cocopeat blocks.",
    thumbnail: ThumbnailCoconutPeatBlocks,
  },
  {
    name: "Desinccated Coconut",
    desc: "Desiccated Coconut is a grated, dried (3% moisture content max.), and unsweetened fresh meat or kernel of a mature fruit of coconut. Desiccated Coconuts are graded by its cutting size, for example, fine grade and medium grade where fine grade is smaller particle size than the medium grade.",
    thumbnail: ThumbnailDesiccatedCoconut,
  },
  {
    name: "Virgin Coconut Oil",
    desc: "Virgin coconut oil is the oil extracted from coconuts without the application of heat. It is rapidly gaining popularity throughout the world in comparison to ordinary coconut oil and for a good reason. There is, in fact, a substance called virgin coconut oil and it differs from regular coconut oil in significant ways. These differences mainly lie with the source (more specifically, the physical form of the source), the method of extraction, and its subsequent benefits.",
    thumbnail: ThumbnailVirginCoconutOil,
  },
];

export const Product = props => {
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
            <div>
              <button>
                <span>See Details</span>
              </button>
              <a
                href={"https://wa.me/+6282221722260"}
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
