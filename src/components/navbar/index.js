import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import classNames from "classnames";
import { UCTextGreen, UCTextWhite } from "assets/icons";
import Styles from "./styles.module.scss";
import { Link } from "react-router-dom";

export const NavigationTop = (props) => {
  const { scrollState, positionY } = props;

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
      <Navbar.Brand href="/">
        {(scrollState === "up" && positionY === 0) || scrollState === "down" ? (
          <UCTextWhite />
        ) : (
          <UCTextGreen />
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
          <Link
            className={classNames(Styles.navText, {
              [Styles.black]: scrollState === "up",
              [Styles.white]: scrollState === "up" && positionY === 0,
            })}
            to={"/#about"}
          >
            About
          </Link>
          <Link
            className={classNames(Styles.navText, {
              [Styles.black]: scrollState === "up",
              [Styles.white]: scrollState === "up" && positionY === 0,
            })}
            to={"/journey"}
          >
            Journey
          </Link>
          <Link
            className={classNames(Styles.navText, {
              [Styles.black]: scrollState === "up",
              [Styles.white]: scrollState === "up" && positionY === 0,
            })}
            to={"/#feature"}
          >
            Feature
          </Link>
          <Link
            className={classNames(Styles.navText, {
              [Styles.black]: scrollState === "up",
              [Styles.white]: scrollState === "up" && positionY === 0,
            })}
            to={"/#product"}
          >
            Product
          </Link>
          <Link
            className={classNames(Styles.navText, {
              [Styles.black]: scrollState === "up",
              [Styles.white]: scrollState === "up" && positionY === 0,
            })}
            to={"/#team"}
          >
            Team
          </Link>
          <Link
            className={classNames(Styles.navText, {
              [Styles.black]: scrollState === "up",
              [Styles.white]: scrollState === "up" && positionY === 0,
            })}
            to={"/#contact"}
          >
            Contact
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
