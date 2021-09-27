import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import classNames from "classnames";
import { UCTextGreen, UCTextWhite } from "assets/icons";
import Styles from "./styles.module.scss";

export const NavigationTop = props => {
  const { scrollState, positionY, onNavigate, refs } = props;

  return (
    <Navbar
      className={classNames(Styles.navbar, {
        [Styles.hide]: scrollState === "down",
        [Styles.wBackground]: scrollState === "up",
        [Styles.transparent]: scrollState === "up" && positionY === 0,
      })}
      expand="lg"
      fixed="top"
    >
      <Navbar.Brand href="#">
        {scrollState === "up" && positionY === 0 ? (
          <UCTextWhite />
        ) : scrollState === "up" ? (
          <UCTextGreen />
        ) : (
          <UCTextWhite />
        )}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse>
        <Nav
          className="mr-auto my-2 my-lg-0"
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <span
            className={classNames(Styles.navText, {
              [Styles.black]: scrollState === "up",
              [Styles.white]: scrollState === "up" && positionY === 0,
            })}
            onClick={() => onNavigate(refs.aboutRef)}
          >
            About
          </span>
          <span
            className={classNames(Styles.navText, {
              [Styles.black]: scrollState === "up",
              [Styles.white]: scrollState === "up" && positionY === 0,
            })}
          >
            Journey
          </span>
          <span
            className={classNames(Styles.navText, {
              [Styles.black]: scrollState === "up",
              [Styles.white]: scrollState === "up" && positionY === 0,
            })}
            onClick={() => onNavigate(refs.featureRef)}
          >
            Feature
          </span>
          <span
            className={classNames(Styles.navText, {
              [Styles.black]: scrollState === "up",
              [Styles.white]: scrollState === "up" && positionY === 0,
            })}
            onClick={() => onNavigate(refs.productRef)}
          >
            Product
          </span>
          <span
            className={classNames(Styles.navText, {
              [Styles.black]: scrollState === "up",
              [Styles.white]: scrollState === "up" && positionY === 0,
            })}
            onClick={() => onNavigate(refs.teamRef)}
          >
            Team
          </span>
          <span
            className={classNames(Styles.navText, {
              [Styles.black]: scrollState === "up",
              [Styles.white]: scrollState === "up" && positionY === 0,
            })}
            onClick={() => onNavigate(refs.contactRef)}
          >
            Contact
          </span>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
