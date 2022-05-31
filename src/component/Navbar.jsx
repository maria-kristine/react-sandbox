/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import LightAndDarkMode from "./Light-and-dark-mode";

const Navbar = () => {
  const styles = {
    navbar: css`
      text-align: center;
      background-color: #eeeeef;
      padding: 10px 10px 0 10px;
      & h1 {
        padding: 10px 0;
        text-transform: uppercase;
      }
      & a {
        text-decoration: none;
        padding: 5px 0;
        color: #252734;
      }
    `,
    subTitle: css`
      width: 900px;
      margin: 0 auto;
      display: flex;
      justify-content: center;
      gap: 30px;
    `,
  };
  return (
    <nav css={styles.navbar}>
      <LightAndDarkMode />
      <h1>SANDBOX</h1>
      <div css={styles.subTitle}>
        <Link to="/home">Home</Link>
        <Link to="/about">About us</Link>
        <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
