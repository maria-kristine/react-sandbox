/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import LightAndDarkMode from "./Light-and-dark-mode";

const Navbar = () => {
  const styles = {
    navbar: css`
      text-align: center;
      background-color: #eeeeef;
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
        <LightAndDarkMode/>
      <h1>Heading</h1>
      <div css={styles.subTitle}>
        <a href="/about">About us</a>
        <a href="/contact">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
