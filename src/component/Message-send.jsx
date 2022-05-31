/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";

const MessageSend = () => {
  const styles = {
    thanks: css`
      width: 600px;
      margin: 100px auto;
      & h3 {
        text-align: center;
        font-weight: bold;
        font-size: 2rem;
        padding-bottom: 20px;
        color: #9ec4dc;
      }
      & p {
        text-align: center;
      }
    `,
    link: css`
      display: block;
      text-align: center;
      margin-top: 230px;
      color: #252734;
    `,
  };
  return (
    <div css={styles.thanks}>
      <h3>Thanks for your message.</h3>
      <p>you will hear from us.</p>
      <p>have a nice day.</p>
      <Link to="/home" css={styles.link}>
        Back to home
      </Link>
    </div>
  );
};

export default MessageSend;
