import React from "react";
import Styles from "./styles.module.scss";
import {
  IconFacebookWhite,
  IconInstagramWhite,
  IconLinkedInWhite,
} from "assets/icons";
import { LogoWhite } from "assets/images";

export const Footer = (props) => {
  const { innerRef } = props;
  return (
    <div className={Styles.container} ref={innerRef}>
      <header>
        <h3>Questions?</h3>
        <span>Let’s Get In Touch</span>
      </header>
      <main>
        <section>
          <img src={LogoWhite} alt={"Icon UC"} />
          <h4>PT. Universal Coco Indonesia</h4>
          <span>
            We also continue to update the information about the company through
            social media, for the latest information you can follow our social
            media.
          </span>
          <div>
            <a
              href={"https://www.facebook.com/universalcoco.id/"}
              target={"_blank"}
              rel="noreferrer"
            >
              <IconFacebookWhite />
            </a>

            <a
              href={"https://www.instagram.com/universalcoco.id/"}
              target={"_blank"}
              rel="noreferrer"
            >
              <IconInstagramWhite />
            </a>

            <a
              href={"https://www.linkedin.com/company/universal-coco-indonesia"}
              target={"_blank"}
              rel="noreferrer"
            >
              <IconLinkedInWhite />
            </a>
          </div>
        </section>
        <section></section>
      </main>
      <footer>
        <span>© 2022 Universal Coco. All rights reserved</span>
      </footer>
    </div>
  );
};
