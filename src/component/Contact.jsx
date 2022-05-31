/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import ContactForm from "./Contact-form";

const Contact = () => {
  const styles = {
    contact: css`
      width: 700px;
      margin: 0 auto;
      padding: 10px 0;
      margin-top: 50px;
      margin-bottom: 50px;
      & h2{
         padding-bottom: 10px;
         color: #252734;
      }
    `,

  };
  return (
    <div css={styles.contact}>
      <h2>Contact us</h2>
        <ContactForm/>
    </div>
  );
};

export default Contact;
