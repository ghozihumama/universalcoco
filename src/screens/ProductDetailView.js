import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import { Jumbotron } from "components/jumbotron";
import productJson from "data/detailProduct.json";
import { Base } from "components/base";
import {
  BannerProduct1,
  BannerProduct2,
  BannerProduct3,
  ImgVirginCoconutOil1,
  ImgVirginCoconutOil2,
  ImgVirginCoconutOil3,
  ImgVirginCoconutOil4,
  ImgVirginCoconutOil5,
  ImgVirginCoconutOil6,
  ImgBriquette1,
  ImgBriquette2,
  ImgBriquette3,
  ImgBriquette4,
  ImgBriquette5,
  ImgBriquette6,
  ImgDesiccatedCoconut1,
  ImgDesiccatedCoconut2,
  ImgDesiccatedCoconut3,
  ImgDesiccatedCoconut4,
  ImgDesiccatedCoconut5,
  ImgDesiccatedCoconut6,
} from "assets/images";
import styles from "./ProductDetailView.module.scss";

function ProductDetailView() {
  const [data, setData] = useState(null);
  const [idxImgSelected, setIdxImgSelected] = useState(0);
  const [minIdxImgShow, setMinIdxImgShow] = useState(0);
  const [maxIdxImgShow, setMaxIdxImgShow] = useState(3);
  const params = useParams();
  const { key } = params;

  const getData = useCallback(() => {
    const product = productJson.find((item) => (item.key = key));

    switch (key) {
      case "coconut-charcoal-briquette":
        product.images = [
          ImgBriquette1,
          ImgBriquette2,
          ImgBriquette3,
          ImgBriquette4,
          ImgBriquette5,
          ImgBriquette6,
        ];
        break;
      case "desiccated-coconut":
        product.images = [
          ImgDesiccatedCoconut1,
          ImgDesiccatedCoconut2,
          ImgDesiccatedCoconut3,
          ImgDesiccatedCoconut4,
          ImgDesiccatedCoconut5,
          ImgDesiccatedCoconut6,
        ];
        break;
      case "virgin-coconut-oil":
        product.images = [
          ImgVirginCoconutOil1,
          ImgVirginCoconutOil2,
          ImgVirginCoconutOil3,
          ImgVirginCoconutOil4,
          ImgVirginCoconutOil5,
          ImgVirginCoconutOil6,
        ];
        break;
      default:
        break;
    }

    setData(product);
  }, [key]);

  const handleImageBanner = () => {
    switch (key) {
      case "coconut-charcoal-briquette":
        return BannerProduct1;
      case "desiccated-coconut":
        return BannerProduct2;
      case "virgin-coconut-oil":
        return BannerProduct3;
      default:
        break;
    }
  };

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <Base>
      {data ? (
        <React.Fragment>
          <Jumbotron
            image={handleImageBanner()}
            h1={data.banner.h1}
            h3={data.banner.h3}
          />
          <div className={styles.containerContent}>
            <div className={styles.ingDisplayWrapper}>
              <img
                src={data.images[idxImgSelected]}
                className={styles.imgDisplay}
                alt={""}
              />
              <div className={styles.imgCatalogueWrapper}>
                {data.images
                  .filter(
                    (_, idx) => idx >= minIdxImgShow && idx <= maxIdxImgShow
                  )
                  .map((img, idx) => (
                    <img
                      key={idx.toString()}
                      src={img}
                      alt={""}
                      onClick={() => setIdxImgSelected(idx)}
                      className={styles.imgCatalogue}
                    />
                  ))}
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <h2>{data.name}</h2>
              <h4>{data.tagline}</h4>
              {data.desc.map((desc, idx) => (
                <p key={idx.toString()} style={{ width: 500 }}>
                  {desc}
                </p>
              ))}
            </div>
          </div>
          <div>
            <button>Download Catalog</button>
            <button>Contact Us</button>
          </div>
        </React.Fragment>
      ) : (
        <Spinner animation="grow" variant="success" />
      )}
    </Base>
  );
}

export default ProductDetailView;
