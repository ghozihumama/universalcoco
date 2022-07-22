import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import { Jumbotron } from "components/jumbotron";
import productJson from "data/detailProduct.json";
import { Base } from "components/base";
import { BannerProduct1, BannerProduct2, BannerProduct3 } from "assets/images";

function ProductDetailView() {
  const [data, setData] = useState(null);
  const params = useParams();
  const { key } = params;

  const getData = useCallback(() => {
    const product = productJson.find((item) => (item.key = key));
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
        <Jumbotron
          image={handleImageBanner()}
          h1={data.banner.h1}
          h3={data.banner.h3}
        />
      ) : (
        <Spinner animation="grow" variant="success" />
      )}
    </Base>
  );
}

export default ProductDetailView;
