import React from "react";
import { Jumbotron } from "components/jumbotron";
import { Base } from "components/base";
import { BannerJourney } from "assets/images";

function JourneyView() {
  return (
    <Base>
      <Jumbotron
        image={BannerJourney}
        h3={"The journey to becoming"}
        h1={"The Leading Indonesian Coconut Products Supplier"}
      />
    </Base>
  );
}

export default JourneyView;
